Cypress.Commands.add('login', () => {
  cy.visit('/login');
  cy.get('#username').type('testuser');
  cy.get('#password').type('Test@123');
  cy.get('button[type="submit"]').click();
});
