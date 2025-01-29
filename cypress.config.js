const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_HPTL_BASE_URL || "https://practicesoftwaretesting.com",
    env: {
      userEmail: process.env.CYPRESS_HPTL_USER_EMAIL,
      userPassword: process.env.CYPRESS_HPTL_USER_PASSWORD,
      cardNumber: process.env.CYPRESS_HPTL_CARD_NUMBER,
      expiryDate: process.env.CYPRESS_HPTL_EXPIRY_DATE,
      cvv: process.env.CYPRESS_HPTL_CVV,
    },
    setupNodeEvents(on, config) {
      //Added this to implement nodeEvents here, this is useful when we extend Cypress with custom logic, modify or enhance test execution, handle files, logging, or even custom reporting
    }
  }
})
