import admin from '../fixtures/admin.json'
import wrongCredentials from '../fixtures/badUser.json'
const errorMessage = 'Your username and/or password are incorrect. Please try again.'

describe('Testing loging to saleor dashboard', () => {
  it('Should open dashboard page', () => {
    cy.openLoginPage()
    
    cy.checkIfLoginPageOpened()
  })

  it('Should show error message when trying to login with wrong credentials', () => {
    cy.loginToSaleour(wrongCredentials.email, wrongCredentials.password)
    
    cy.checkIfErrorMessageAppeared(errorMessage)
  })

  it('Should login with correct credentials', () => {
    cy.loginToSaleour(admin.email ,admin.password)

    cy.checkIfUserLogedInSuccessfully(admin.email)
  })
})
