
describe('contact form tests', ()=>{
    let contactDropdown = '#id_contact'
    let contactEmailForm = "input[id='email']"
    let messageField = "textarea[id='message']"
    let submitButton = "button[id='submitMessage']"
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/')
        cy.get('#contact-link').click()
    })
    it('user is able to send a form with valid data - valid email, asserts verification', ()=>{
        cy.get(contactDropdown).select('Customer service')
        cy.get(contactEmailForm).type('nixe74315@bbsaili.com')
        cy.get(messageField).type('test message')
        cy.get(submitButton).click()
        cy.get('.alert-success').should('be.visible')
           //^ asserts that succes message is visible
        
    })
    it('user is able to send a form with invalid data - blank email form, asserts verification', ()=>{
        cy.get(contactDropdown).select('Customer service')
        cy.get(contactEmailForm).type('     ')
        cy.get(messageField).type('test message')
        cy.get(submitButton).click()
        cy.get('.alert-danger')
            .should('be.visible')
            .find('li')
            .should('contain', 'Invalid email address.')
        
            
            //^ verifies that alert box is visible, and content of child 'li' informs us about invalid email
        
    })
    it('verifies that a proper hint message under the dropdown menu "Subject Heading" is visible, when each item is selected', ()=>{
        cy.get(contactDropdown).select('Customer service')
        cy.get('#desc_contact2').invoke('text').then(($customerServiceMsg)=>{
            let customerAssertMessage = $customerServiceMsg.trim()
            expect($customerServiceMsg).to.contain(customerAssertMessage)
        })
        cy.get(contactDropdown).select('Webmaster')
        cy.get('#desc_contact1').invoke('text').then(($webmasterMsg)=>{
            let webmasterAssertMessage = $webmasterMsg.trim()
            expect($webmasterMsg).to.contain(webmasterAssertMessage)
        })
    })
    it('verifies that attachement field is visible', ()=>{
        cy.get("#uniform-fileUpload").should('be.visible')
    })
})