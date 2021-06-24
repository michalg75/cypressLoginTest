import Login from '../my own tests/page objects/login'

describe('basic cart functions', ()=>{
    const login = new Login()
    it('adds t-shirt to cart', ()=>{
        login.mainPage()
        cy.get('a[title="T-shirts"]').click()
    })
})