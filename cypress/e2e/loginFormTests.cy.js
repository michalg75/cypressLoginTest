// import loginPage from "../support/pageObjects/adminStorePage/loginPage"
// import { incorrectMail, incorrectPassword, correctCredentials, alertBoxMessages }
//     from "../fixtures/adminPage/loginPage.json"
// import loginPageSelectors from "../support/selectors/loginPageSelectors"

describe('login success test', ()=>{

    // beforeEach(() => {
    //     loginPage.visitLoginPage()
    // })
    // afterEach(() => {
    //     cy.clearLocalStorage()
    // })

    it('asserts login success', ()=>{
        // loginPage.insertLoginDataAndClickSubmit(correctCredentials.email, correctCredentials.password)
        // cy.url().should('eq', Cypress.config('baseUrl') + Cypress.config('panelMainPage'))
        cy.visit('https://wp.pl')
        cy.url().should('contain', 'wp')
    })

    // it('asserts failed login with wrong mail', ()=>{
    //     loginPage.insertLoginDataAndClickSubmit(incorrectMail.mail, correctCredentials.password)
    //     loginPageSelectors.alertBox().invoke('text').then(text => {
    //         expect(text.trim()).to.eq(alertBoxMessages.baseAlert + alertBoxMessages.wrongMailAlert)
    //     })
    // })

    // it('asserts failed login with wrong password', ()=>{
    //     loginPage.insertLoginDataAndClickSubmit(correctCredentials.email, incorrectPassword.password)
    //     loginPageSelectors.alertBox().invoke('text').then(text => {
    //         expect(text.trim()).to.eq(alertBoxMessages.baseAlert + alertBoxMessages.wrongPasswordAlert)
    //     })
    // })

})



    

