const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url : "https://www.hsbc.co.in"
    },
    specPattern : 'cypress/integration/exam/*.js'
  },
});
