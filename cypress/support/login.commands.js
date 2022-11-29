Cypress.Commands.add('loginToSaleour', (email, password) => { 
    cy.get('[data-test-id="email"]').clear().type(email)
    cy.get('[data-test-id="password"]').clear().type(password)
    cy.get('.MuiButton-label').contains('Sign in').click()
 })

 Cypress.Commands.add('openLoginPage', (message) => { 
    cy.visit('/dashboard')
 })