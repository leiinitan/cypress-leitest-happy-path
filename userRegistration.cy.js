describe("User Registration Happy Path Testing", () => {
    beforeEach(function () {
        const email = `testLei+${Date.now()}@test.com`
        cy.wrap(email).as('userEmail')
    })
    const user = {
        firstName: "Lei Test",
        lastName: "Atlas ESR",
        dob: "1991-01-01",
        address: "1 Test Street",
        postcode: "1234",
        city: "Testing City",
        state: "State of Tester",
        country: "PH",
        phone: "09170000000",
        password: "T3st1234!"
    }

    it("Unsuccessfully registers new user using Customer registration form", () => {
        cy.visit('/auth/register')

        cy.get('[data-test="first-name"]').type(user.firstName)
        cy.get('[data-test="last-name"]').type(user.lastName)
        cy.get('[data-test="dob"]').type(user.dob)
        cy.get('[data-test="address"]').type(user.address)
        cy.get('[data-test="postcode"]').type(user.postcode)
        cy.get('[data-test="city"]').type(user.city)
        cy.get('[data-test="state"]').type(user.state)
        cy.get('[data-test="country"]').select(user.country)
        cy.get('[data-test="phone"]').type(user.phone)
        cy.get('@userEmail').then((email) => {
            cy.get('[data-test="email"]').type(email);
        })
        cy.get('[data-test="password"]').type(user.password)
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="register-error"]').contains('The given password has appeared in a data leak.')
    })
    it("Successfully registers new user using Customer registration form", () => {
        cy.visit('/auth/register')

        cy.get('[data-test="first-name"]').type(user.firstName)
        cy.get('[data-test="last-name"]').type(user.lastName)
        cy.get('[data-test="dob"]').type(user.dob)
        cy.get('[data-test="address"]').type(user.address)
        cy.get('[data-test="postcode"]').type(user.postcode)
        cy.get('[data-test="city"]').type(user.city)
        cy.get('[data-test="state"]').type(user.state)
        cy.get('[data-test="country"]').select(user.country)
        cy.get('[data-test="phone"]').type(user.phone)
        cy.get('@userEmail').then((email) => {
            cy.get('[data-test="email"]').type(email);
        })
        cy.get('[data-test="password"]').type('Atl@as3SR!')
        cy.get('[data-test="register-submit"]').click()

        //to verify if the user successfully created an account
        cy.url().should('include', '/auth/login')
    })
}) 