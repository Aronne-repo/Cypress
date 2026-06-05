describe('Logout', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Log out should be performed successfully', () => {
    cy.intercept('POST', '**/events/push').as('logoutRequest');

    cy.get('.oxd-userdropdown-tab').within(() => {
      cy.get('i.oxd-userdropdown-icon').should('be.visible').click();
    });
    cy.chooseDropdownOption('.oxd-dropdown-menu', 'Logout');

    cy.wait('@logoutRequest').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/auth/login');
  });
});