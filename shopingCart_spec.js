import Login from './page objects/login'

describe('basic cart functions', ()=>{
    const login = new Login()
    beforeEach(()=>{
        login.mainPage()
    })
    
    it('adds t-shirt to cart', ()=>{
        cy.get('#block_top_menu > ul > li:nth-child(3) > a').click()
        cy.get('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
            .trigger('mouseover')
        cy.get('span').contains('Add to cart').click()
        cy.wait(5000)
        cy.contains('Continue shopping').click()
        cy.get('span .ajax_cart_quantity').should('contain', '1')
        // ^ above code add t-shirt to shopping cart, and ensures that it is added by checking quantity displayed in our cart - should be '1'
   
        cy.get('#block_top_menu > ul > li:nth-child(2) > a')
            .trigger('mouseover')
        cy.get('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a')
            .click({force:true})
        cy.get('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
            .trigger('mouseover')
        cy.contains('Add to cart').click()
        cy.wait(5000)
        cy.contains('Continue shopping').click()
        cy.get('span .ajax_cart_quantity').should('contain', '2')
        //here we add another item to our cart, and ensure that it is added by checking quantity displayed in our cart - should be '2'

        cy.get("a[title='View my shopping cart']")
            .trigger('mouseover').then(()=>{
                cy.get('.ajax_cart_block_remove_link')
                .first()
                .click()
            })
            
        cy.get('span .ajax_cart_quantity').should('contain', '1') 
        //here we remove one item from our cart and ensure that it was removed by checking quantity - should be back to '1'
    })
})