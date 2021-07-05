import Login from './page objects/login'

describe('contact form tests', ()=>{
    const login = new Login()
    beforeEach(()=>{
        login.mainPage()
        cy.get('#contact-link').click()
    })
    it('user is able to send a form with valid data - valid email, asserts verification', ()=>{
        cy.get('#id_contact').select('Customer service')
        cy.get("input[id='email']").type('nixe74315@bbsaili.com')
        cy.get("textarea[id='message']").type('test message')
        cy.get("button[id='submitMessage']").click().then(()=>{
            cy.get('.alert-success').should('be.visible')
           //^ asserts that succes message is visible
        })
    })
    it('user is able to send a form with invalid data - blank email form, asserts verification', ()=>{
        cy.get('#id_contact').select('Customer service')
        cy.get("input[id='email']").type('     ')
        cy.get("textarea[id='message']").type('test message')
        cy.get("button[id='submitMessage']").click().then(()=>{
            const alertMsg = cy.get('.alert-danger')
            const alertContent = cy.get(".alert-danger > ol > li")
            alertMsg.should('be.visible')
            alertContent.should('contain', 'Invalid email address.')
            //^ verifies that alert box is visible, and content informs us about invalid email
        })
    })
    it('verifies that a proper hint message under the dropdown menu "Subject Heading" is visible, when each item is selected', ()=>{
        cy.get('#id_contact').select('Customer service')
        cy.get('#desc_contact2').then(($customerServiceMsg)=>{
            expect($customerServiceMsg).to.have.text('\n                            For any question about a product, an order\n                        ')
        })
        cy.get('#id_contact').select('Webmaster')
        cy.get('#desc_contact1').then(($webmasterMsg)=>{
            expect($webmasterMsg).to.have.text('\n                            If a technical problem occurs on this website\n                        ')
        })
    })
    it('verifies that attachement field is visible', ()=>{
        cy.get("#uniform-fileUpload").should('be.visible')
    })
})