const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0 // No retry when developing / debugging tests
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});