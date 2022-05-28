// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { registerCommand } from 'cypress-visit-with-custom-geolocation';
registerCommand();

Cypress.Commands.add('login', () => {
  const email = Cypress.env('login');
  const password = Cypress.env('password');

  cy.contains('Entrar').click();
  cy.location('pathname').should('include', '/auth');

  cy.get('input#username').type(`${email}`);

  cy.contains('Continue').click();
  cy.location('pathname').should('include', '/authenticate');

  cy.get('input#password').type(`${password}`);

  cy.contains('Log in').click();

  cy.contains('Keep up the good work', { timeout: 60000 }).should('be.visible');
});

export {};
