import Login from './page objects/login'

describe('basic cart functions', ()=>{
    const login = new Login()
    it('adds t-shirt to cart', ()=>{
        login.mainPage()
        cy.get('#block_top_menu > ul > li:nth-child(3) > a').click()
        cy.get('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
            .trigger('mouseover')
        cy.get('span').contains('Add to cart').click()
        cy.get('span').contains('Continue shopping').click()
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
        cy.get('span').contains('Add to cart').click()
        cy.get('span').contains('Continue shopping').click()
    })
})