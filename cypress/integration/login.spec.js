describe('Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/login');
    cy.get('#username').type('testuser');
    cy.get('#password').type('Test@123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
