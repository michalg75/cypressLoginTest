import Login from './page objects/login'

describe('create account scenarios', () => {
    const login = new Login()
    beforeEach(() => {
        login.mainPage()
      })
    // it('create account', () => {
    //     login.mainPage()
    //     login.loginButton().click()
    //     cy.url().should('include', 'my-account')
    //     // ^ asserts that link includes 'my-account'
    //     cy.get('#email_create').type('nixe74315@bbsaili.com')
    //     login.createAccountButtonClick()
    //     // ^ enters test email and clicks 'Create account button'
    //     cy.wait(10000)
    //     // ^ transition is slow, so cypress is waiting 10seconds
    //     login.yourAddressFirstNameForm('Test')
    //     login.yourAddressLastNameForm('Testowy')
    //     login.pickDay('6')
    //     login.pickMonth('October')
    //     login.pickYear('1989')
    //     login.passwordForm('Test123!')
    //     // here's completed 'Your personal information' section form 
    //     login.yourAddressFirstNameForm('Test')
    //     login.yourAddressLastNameForm('Testowy')
    //     login.pickCountry('United States')
    //     login.enterPhone('111-000-555')
    //     login.enterAddresses('Test address 1', '78923', 'Test address 2', 'Alabama', 'Test city')
    //     login.registerAccountButtonClick()
    // })
    it('log into account', () =>{
        login.clickLoginButton()
        cy.get('#email').type('nixed74315@bbsaili.com')
        cy.get('#passwd').type('Test123!')
        cy.get('#SubmitLogin').click()
        cy.get('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').should('contain', 'TestTest TestowyTestowy')
    })
})