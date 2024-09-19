const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/features/*.feature",
    cucumberJson: {
      generate: true,
      outputFolder: "cypress/reports/cucumber-json", // Output folder for the JSON files
      filePrefix: "",
      fileSuffix: ".cucumber"
    },
    viewportWidth: 1280,  // Set the default viewport width
    viewportHeight: 720,  // Set the default viewport height
  },
});
