describe('[GymPass]', () => {
  it('should book class', () => {
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

      cy.get('button:contains("Book")')
        .parent()
        .filter(`:contains("${Cypress.env('book_class_gym_class')}")`)
        .filter(`:contains("${Cypress.env('book_class_time')}")`)
        .find('button')
        .click();

      cy.contains('Confirm booking').click();
    });
  });

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
