describe('User Profile Update Test', () => {
  it('should update profile details', () => {
    cy.login(); // custom command
    cy.get('#profile').click();
    cy.get('#phone').clear().type('9876543210');
    cy.get('#save').click();
    cy.contains('Profile updated successfully').should('be.visible');
  });
});
