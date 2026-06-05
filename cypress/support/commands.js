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

Cypress.Commands.add('chooseDropdownOption', (locator, optionName) => {
  cy.get(locator).within(() => {
      cy.contains('li', optionName.trim()).should('be.visible').click();
    });
});

Cypress.Commands.add('openSidebarChevron', (locator) => {
  cy.get(locator).then(($icon) => {
    const classes = $icon.attr('class') || '';

    if (classes.includes('toggled')) {
      cy.wrap($icon).parent('button').click();
    }
  });
});

Cypress.Commands.add('closeSidebarChevron', (locator) => {
  cy.get(locator).then(($icon) => {
    const classes = $icon.attr('class') || '';

    if (!classes.includes('toggled')) {
      cy.wrap($icon).parent('button').click();
    }
  });
});