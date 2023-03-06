describe('My First Test', () => {

    it('verify title-positive', function() {
 
        cy.visit("https://www.facebook.com/")
        cy.title().should('contain','FACEBOOK')

    })

    it('verify title-Negative test', () => {
 
        cy.visit("https://www.facebook.com/")
        cy.title().should('contain','DEMOQAA3213')

    })


  })