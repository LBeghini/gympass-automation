describe('[GymPass - Check In]', () => {
  it('should check in', () => {
    cy.visit('/');

    cy.login().then(() => {
      cy.window().then((win) => {
        cy.setGeoLocation(
          win,
          Cypress.env('checkin_gym_latitude'),
          Cypress.env('checkin_gym_longitude')
        );
      });

      cy.get('#checkin').click({
        force: true,
      });

      cy.contains(Cypress.env('checkin_gym_name'), { timeout: 60000 }).click({
        force: true,
      });

      cy.contains('Complete your Check in', { timeout: 60000 })
        .should('be.visible')
        .then(() => {
          cy.get(`div[title="${Cypress.env('checkin_gym_class')}"]`)
            .first()
            .click({
              force: true,
            });
        });
      cy.contains('Check in completed', { timeout: 60000 }).should(
        'be.visible'
      );
    });
  });
});

// Spec files cannot be compiled under '--isolatedModules' because it is considered a global script file.
// Add an import, export, or an empty 'export {}' statement to make it a module.
export {};
