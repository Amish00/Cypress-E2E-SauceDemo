describe('SauceDemo E2E Flow', () => {
  
  beforeEach(() => {
    // This runs before every 'it' block
    cy.visit('https://www.saucedemo.com/')
  })

  it('Completes the checkout process successfully', () => {
    // 1. Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Cypress automatically asserts elements exist before acting on them, 
    // but explicit assertions use .should()
    cy.get('.title').should('have.text', 'Products')

    // 2. Add to Cart
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('contain', '1')

    // 3. Checkout Flow
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

    // 4. Fill Information
    cy.get('#first-name').type('Taylor')
    cy.get('#last-name').type('Smith')
    cy.get('#postal-code').type('90210')
    cy.get('#continue').click()

    // 5. Finish and Verify
    cy.get('#finish').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })
})