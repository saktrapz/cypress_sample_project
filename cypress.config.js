const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // Global project settings
  viewportWidth: 1280,   // Default viewport width for tests
  viewportHeight: 720,   // Default viewport height for tests
});
