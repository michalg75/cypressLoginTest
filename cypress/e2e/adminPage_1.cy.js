describe('login success and search engine test', ()=>{
    beforeEach(()=>{
       cy.visit('https://admin-demo.nopcommerce.com/')

       cy.get('#Email')
        .clear()
        .type('admin@yourstore.com')

       cy.get('#Password')
        .clear()
        .type('admin')

       cy.get('.login-button').click()  
    })
    it('asserts login success', ()=>{
        cy.url()
            .then((url)=>{
                expect(url).to.equal('https://admin-demo.nopcommerce.com/admin/')
    })
})
    it.only('checks if list in search engine is displaying items related for what searched for', ()=>{
        cy.get('.fa')
            .click()
        cy.get('.admin-search-box')
            .should('be.visible')
            .click()
            .type('order', {force:true})
            cy.get('.tt-selectable')
                .children() //yields all childrens of selected element
                .should('contain', 'order')
            
        })
      
    })



    

