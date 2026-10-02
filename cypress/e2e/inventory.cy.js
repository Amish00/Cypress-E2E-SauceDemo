describe('Inventory and Sorting', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Sorts products by Name (Z to A)', () => {
    cy.get('.product_sort_container').select('za')
    cy.get('.active_option').should('have.text', 'Name (Z to A)')
    cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
  })

  it('Sorts products by Price (Low to High)', () => {
    cy.get('.product_sort_container').select('lohi')
    cy.get('.active_option').should('have.text', 'Price (low to high)')
    cy.get('.inventory_item_price').first().should('have.text', '$7.99')
  })

  it('Matches product details from grid to detail page', () => {
    cy.get('#item_4_title_link').click()
    cy.url().should('include', 'inventory-item.html?id=4')
    cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('.inventory_details_price').should('have.text', '$29.99')
  })
})