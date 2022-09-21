const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  env: {
    telegram: {
      includeStats: true,
      reportsPath: './mocha-reports/*.json',
      finalReport: 'final-report.json',
      statuses: {
        passed: 'PASSED😋',
        failed: 'FAILED😡',
        pending: 'SKIPPED🥶',
      },
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    retries: 2,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    pageLoadTimeout: 100000,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
