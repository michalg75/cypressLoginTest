import Login from './page objects/login'

describe('basic cart functions', ()=>{
    const login = new Login()
    beforeEach(()=>{
        login.mainPage()
        login.logIntoAccount()
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
    it('add one item to bucket, then add another - same item - and ensure that price is summed up correctly', ()=>{
        cy.get('.logo').click()
        let firstPrice
        let fixedFirstPrice 
        let secondPrice
        let fixedSecondPrice 
        let finalPrice
        cy.get('ul#homefeatured').find('li').first().click()
        cy.get('#our_price_display').then(($firstprice)=>{
            firstPrice = $firstprice.text()
            console.log(fixedFirstPrice)
            cy.contains('Add to cart').click()
            cy.contains('Continue shopping').click()

            })
            //above code adds one t-shirt to bucket
            cy.get('.logo').click()
         
           cy.get('ul#homefeatured').find('li').first().click()
            cy.get('#our_price_display').then(($secondprice)=>{
                secondPrice = $secondprice.text()
                console.log(fixedSecondPrice)
                cy.contains('Add to cart').click()
                cy.contains('Continue shopping').click()
    
                })
               //above code adds another t-shirt to bucket
            cy.get("a[title='View my shopping cart']")
            .trigger('mouseover')
            .then(()=>{
                fixedFirstPrice = parseFloat(firstPrice.substring(1))
                fixedSecondPrice = parseFloat(secondPrice.substring(1))
                console.log(fixedFirstPrice)
                console.log(fixedSecondPrice)
                cy.get("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div > div > dl > dt > div > span").then(($finaprice)=>{
                    finalPrice = $finaprice.text()
                    expect($finaprice).to.have.text('$'+ (fixedFirstPrice + fixedSecondPrice) + "")
                })
            })
            // ensures that prices are summed up correctly
        })
        })
        
     
 
        
    
