
describe("XPathLocators", ()=>{

    it('find No of Products', ()=>{
          
         cy.visit('http://automationpractice.pl/index.php')
         cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)



    })



})