import loginPageSelectors from "../../selectors/loginPageSelectors"

class loginPage {

    visitLoginPage(){
       cy.visit(Cypress.config('baseUrl'))
    }

    insertLoginDataAndClickSubmit(email, password){
        loginPageSelectors.mailInput().clear().type(email)
        loginPageSelectors.passwordInput().clear().type(password)
        loginPageSelectors.loginButton().click()
    }
}

export default loginPage = new loginPage()