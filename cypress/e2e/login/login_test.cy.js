describe('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Login should be performed successfully with valid credentials', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.login();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    cy.url().should('include', '/dashboard/index');
    cy.get('.oxd-topbar-header-title').should('be.visible');
  });

  it('Login should not be performed with invalid username', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.invalidLogin(Cypress.env('invalidUsername'), Cypress.env('password'));
    
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    cy.url().should('not.include', '/dashboard/index');
    cy.get('.oxd-topbar-header-title').should('not.exist');
    cy.get('.oxd-alert-content-text').should('be.visible').and('have.text', 'Invalid credentials');
  });

  it('Login should not be performed with invalid password', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.invalidLogin(Cypress.env('username'), Cypress.env('invalidPassword'));
    
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    cy.url().should('not.include', '/dashboard/index');
    cy.get('.oxd-topbar-header-title').should('not.exist');
    cy.get('.oxd-alert-content-text').should('be.visible').and('have.text', 'Invalid credentials');
  });
});