import Login from './page objects/login'

describe('basic cart functions', ()=>{
    const login = new Login()
    it('log into account', () =>{
        login.mainPage()
        login.clickLoginButton()
        cy.get('#email').type('nixed74315@bbsaili.com')
        cy.get('#passwd').type('Test123!')
        cy.get('#SubmitLogin').click()
        cy.get('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').should('contain', 'TestTest TestowyTestowy')
    })
    it('adds t-shirt to cart', ()=>{
        cy.get('#block_top_menu > ul > li:nth-child(3) > a').click()
        cy.get('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
            .trigger('mouseover')
        cy.get('span').contains('Add to cart').click()
        cy.wait(5000)
        cy.contains('Continue shopping').click()
        cy.get('span .ajax_cart_quantity').should('contain', '1')   
        })
    it('add another item to cart', ()=>{
        cy.get('#header_logo > a > img').click()
        cy.get('#block_top_menu > ul > li:nth-child(2) > a')
            .trigger('mouseover')
        cy.get('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')
            .click({force:true})
        cy.get('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
            .trigger('mouseover')
        cy.contains('Add to cart').click()
        cy.wait(5000)
        cy.contains('Continue shopping').click()
    })
})