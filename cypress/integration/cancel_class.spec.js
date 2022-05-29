describe('[GymPass - Cancel Class]', () => {
  it('should cancel booking', () => {
    cy.visit('/');
    cy.login().then(() => {
      cy.visit('/end-user/br/gyms/search', {
        onBeforeLoad(win) {
          const latitude = Cypress.env('book_class_gym_latitude');
          const longitude = Cypress.env('book_class_gym_longitude');
          cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
            (cb) => {
              return cb({ coords: { latitude, longitude } });
            }
          );
        },
      });

      const gym_name = Cypress.env('book_class_gym_name');

      cy.contains(gym_name)
        .invoke('removeAttr', 'target')
        .click({ force: true });

      cy.get('button:contains("Cancel")').click();

      cy.contains('Yes, cancel', { timeout: 20000 }).click();
    });
  });
});

// Spec files cannot be compiled under '--isolatedModules' because it is considered a global script file.
// Add an import, export, or an empty 'export {}' statement to make it a module.
export {};
