const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  e2e: {
    baseUrl: 'https://admin-demo.nopcommerce.com',
    panelMainPage: '/admin/',
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
