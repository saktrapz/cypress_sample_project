const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
  screenshotOnRunFailure: true,
  video: false,
  // Global project settings
  viewportWidth: 1280,   // Default viewport width for tests
  viewportHeight: 720,   // Default viewport height for tests
});
