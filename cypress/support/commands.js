Cypress.Commands.add('login', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  cy.visit('/web/index.php/auth/login');
  cy.get('input[name="username"]').should('be.visible').type(username);
  cy.get('input[name="password"]').should('be.visible').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('invalidLogin', (username, password) => {
  cy.visit('/web/index.php/auth/login');
  cy.get('input[name="username"]').should('be.visible').type(username);
  cy.get('input[name="password"]').should('be.visible').type(password);
  cy.get('button[type="submit"]').click();
});