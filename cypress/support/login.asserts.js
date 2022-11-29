Cypress.Commands.add('checkIfErrorMessageAppeared', (message) => { 
    cy.get('[data-test-id="login-error-message"]')
    .contains(message)
    .should('be.visible')
 })

 Cypress.Commands.add('checkIfLoginPageOpened', () => { 
    cy.get('#dashboard-app').should('be.visible')
 })

 Cypress.Commands.add('checkIfUserLogedInSuccessfully', (email) => { 
    cy.get('[data-test-id="welcome-header"]')
    .contains(`Hello there, ${email}`)
    .should('be.visible')
 })
 