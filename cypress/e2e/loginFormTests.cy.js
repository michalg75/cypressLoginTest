import loginPage from "../support/pageObjects/adminStorePage/loginPage"
import loginPageSelectors from "../support/selectors/loginPageSelectors"
import loginData from "../fixtures/loginPage.json"

describe('login form tests', () => {

    beforeEach(function () {
        loginPage.visitLoginPage()
    })

    afterEach(() => {
        cy.clearLocalStorage()
    })

    it('asserts login success', () => {
        loginPage.insertLoginDataAndClickSubmit(loginData.correctCredentials.email, loginData.correctCredentials.password)
        cy.url().should('eq', Cypress.config('baseUrl') + Cypress.config('panelMainPage'))
    })

    it('asserts failed login with wrong mail', () => {
        loginPage.insertLoginDataAndClickSubmit(loginData.incorrectMail.mail, loginData.correctCredentials.password)
        loginPageSelectors.alertBox().invoke('text').then(text => {
            expect(text.trim()).to.eq(loginData.alertBoxMessages.baseAlert + loginData.alertBoxMessages.wrongMailAlert)
        })
    })

    it('asserts failed login with wrong password', () => {
        loginPage.insertLoginDataAndClickSubmit(loginData.correctCredentials.email, loginData.incorrectPassword.password)
        loginPageSelectors.alertBox().invoke('text').then(text => {
            expect(text.trim()).to.eq(loginData.alertBoxMessages.baseAlert + loginData.alertBoxMessages.wrongPasswordAlert)
        })
    })

})



    

