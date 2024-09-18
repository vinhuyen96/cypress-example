const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.guru99.com/V4/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },

});
