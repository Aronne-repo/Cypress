describe('Home page - sidebar', () => {
  beforeEach(() => {
    cy.login();
  });

  it('The sidebar text search functionality should work correctly', () => {
    cy.openSidebarChevron('i[class*="bi-chevron-"]');
    cy.get('.oxd-sidepanel-body .oxd-input').clear().type('My Info');
    cy.get('.oxd-main-menu-item-wrapper').should('contain.text', 'My Info');
  });
});