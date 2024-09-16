const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/features/*.feature",
    viewportWidth: 1280,  // Set the default viewport width
    viewportHeight: 720,  // Set the default viewport height
  },
});
