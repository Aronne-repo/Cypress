import {userDropdownOptions} from '../../fixtures/user_dropdown_options.js';

describe('Home page - navbar', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Dashboard should have correct logo and title', () => {
    cy.url().should('include', '/dashboard/index');
    cy.get('.oxd-topbar-header').within(() => {
      cy.get("h6.oxd-text").should('be.visible').and('have.text', 'Dashboard');
    });
    cy.get('nav.oxd-navbar-nav').within(() => {
      cy.get('img[src*="orangehrm-logo.png"]').should('be.visible');
    });
  });

  it('Check options in user dropdown', () => {
    cy.get('span.oxd-userdropdown-tab').should('be.visible').within(() => {
      cy.get(".oxd-userdropdown-icon").click();
    });
    cy.get('.oxd-dropdown-menu').should('be.visible').within(() => {
      cy.get('li a').each(($el, index) => {
        expect($el.text().trim()).to.equal(userDropdownOptions[index]);
      });
    });
  });
});