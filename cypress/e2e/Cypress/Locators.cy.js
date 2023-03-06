describe('CSSLocators',()=>{

    it("csslocators", ()=>{
       
         cy.visit('http://automationpractice.pl/index.php') // Launch App URL 

         // Search or identify search box element and pass value. Using ID locator 
         //cy.get("#search_query_top").type("T-Shirts")                     // Id     
         //cy.get(".search_query").type("T-Shirts")                         // class   Tag is Optional
         //cy.get("[name='search_query']").type("T-Shirts")                 // Attribute
         //cy.get(".search_query[name='search_query']").type("T-Shirts")    // Class & Attribute Combination.

        

          
         cy.get("input.search_query[name='search_query']").type("T-Shirts") // Tag, Class & Attribute Combination.
  
         cy.get(" [name='submit_search']").click()  

         cy.get('.lighter').contains("T-Shirts")  //Assertion

         


 

    })

})