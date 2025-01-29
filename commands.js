Cypress.Commands.add('login', () => {

    cy.visit('/auth/login')
    cy.get('[data-test="email"]').type('testLei+1738162889419@test.com')
    cy.get('[data-test="password"]').type('Atl@as3SR!')
    cy.get('[data-test="login-submit"]').click()

    //to verify user logged in properly
    cy.get('[data-test="page-title"]').contains('My account')
})
