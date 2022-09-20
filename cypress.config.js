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
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
