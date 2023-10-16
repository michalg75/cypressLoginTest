class loginPageSelectors {

    mailInput = () => { return cy.get('#Email') }
    passwordInput = () => { return cy.get('#Password') }
    loginButton = () => { return cy.get('.button-1') }
    alertBox = () => { return cy.get('.validation-summary-errors') }

}

export default loginPageSelectors = new loginPageSelectors()