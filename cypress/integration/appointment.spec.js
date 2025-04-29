describe('Appointment Booking Test', () => {
  it('should book an appointment', () => {
    cy.login(); // custom command
    cy.get('#book-appointment').click();
    cy.get('#doctor-select').select('Dr. Smith');
    cy.get('#date').type('2025-05-01');
    cy.get('#time').select('10:00 AM');
    cy.get('#confirm').click();
    cy.contains('Appointment confirmed').should('be.visible');
  });
});
