cypress-leitest-happy-path

This is a test automation code for Atlas ESR

Running the Tests
To run the tests, follow these steps:
1. Open your terminal and run the following command: npx cypress open
2. This will open the Cypress Test Runner.
3. Select E2E Testing.
4. Choose any browser (e.g., Chrome).
5. Click Start E2E Testing in Chrome.
6. In the Specs section, you will see the following available test suites:
 - addToCart
 - userCheckOut
 - userRegistration

*Notes:*
* I didn’t include the login scenario as a separate test. Instead, I added it as a custom command in commands.js, as it can be reused across multiple tests.
* I tried to use a .env file to keep sensitive data like credit card details protected. However, I forgot how to use the cypress.env() command. I will research this further and update the repository.

Thank You!
Looking forward to your feedback and suggestions. Feel free to reach out if you have any questions.
