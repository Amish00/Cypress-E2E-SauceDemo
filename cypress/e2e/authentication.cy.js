describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Logs in successfully with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Displays error for a locked out user', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out')
  })

  it('Displays error for invalid password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})