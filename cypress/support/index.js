// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { convertTimeToInt } from './utils';
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err) => {
  console.log(err.message);
  return false;
});

Cypress.on('window:before:load', (win) => {
  delete win.fetch;
});

Cypress.$.expr.pseudos.containsInsensitive = function (a, i, m) {
  return Cypress.$(a).text().toLowerCase().indexOf(m[3].toLowerCase()) >= 0;
};

Cypress.$.expr.pseudos.containsTimeAfter = function (a, i, m) {
  let text = Cypress.$(a).text().toLowerCase();
  var matched = text.match(/\d\d?h\d{0,2}/);

  if (matched != null) {
    let idealTime = convertTimeToInt(m[3]);
    let time = convertTimeToInt(matched[0]);

    return time >= idealTime;
  }
  return false;
};
