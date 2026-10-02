describe('Shopping Cart Management', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Adds multiple items and verifies badge count', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    
    // Badge should update to 3
    cy.get('.shopping_cart_badge').should('have.text', '3')
  })

  it('Removes items directly from the cart page', () => {
    // Add one item and go to cart
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get('.shopping_cart_link').click()
    
    // Verify item is in cart, then remove it
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    
    // Verify the cart list is completely empty
    cy.get('.cart_item').should('not.exist')
  })
})