describe('Checkout Form Validations', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    
    // Add item and go straight to checkout form
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
  })

  it('Displays an error when First Name is missing', () => {
    // Only fill Last Name and Zip
    cy.get('#last-name').type('Joshi')
    cy.get('#postal-code').type('44600')
    cy.get('#continue').click()
    
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  })

  it('Cancels the checkout process and returns to cart', () => {
    cy.get('#cancel').click()
    cy.url().should('include', '/cart.html')
    cy.get('.title').should('have.text', 'Your Cart')
  })
})