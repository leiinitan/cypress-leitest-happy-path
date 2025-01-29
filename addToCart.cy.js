describe("User add to Cart Happy Path Testing", () => {
    const email = Cypress.env('HPTL_USER_EMAIL')
    const password = Cypress.env('HPTL_USER_PASSWORD')

    beforeEach(function () {
        cy.login(email, password).then(() => {
        cy.log('Logged in to Practice Software Testing')
    })
  })
    it('Successfully added an item into the user cart', () => {
        cy.get('[data-test="nav-categories"]').click()
        cy.get('[data-test="nav-hand-tools"]').click()
        cy.get('[data-test="product-01JJS5SGPQMZDKEMX8ZQA71SBA"]').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.wait(7000)
        cy.get('.toast-message').should('be.visible')
        cy.get('[data-test="cart-quantity"]').contains('1')
        cy.get('[data-test="nav-cart"]').click()
        cy.get('[data-test="product-title"]').contains('Combination Pliers')
        cy.get('[data-test="cart-total"]').contains('$14.15')

        cy.get('[data-test="nav-categories"]').click()
        cy.get('[data-test="nav-hand-tools"]').click()
        cy.wait(4000)
        cy.get('[data-test="product-01JJS5SGQ8NBY51HNX7JC1W51C"]').click()
        cy.wait(2000)
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="cart-quantity"]', {timeout: 2000}).contains('2')
        cy.wait(2000)
        cy.get('[data-test="nav-cart"]').click()
        cy.get('[data-test="product-title"]').contains('Slip Joint Pliers')
        cy.get('[data-test="cart-total"]').contains('$23.32')
    })
})