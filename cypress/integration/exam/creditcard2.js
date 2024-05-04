this test file is not related project . pls ignore
// describe('HSBC', function(){
//     it('credit card flow', function(){
//          //open the url
//          cy.visit("https://www.hsbc.co.in")
//          //hover cursor on banking menu
//          cy.get('.header-main-navigation-title').eq(1).trigger('mouseover')
//          //credit card link click
//          cy.get('a[href="https://www.hsbc.co.in/credit-cards/"] h2').eq(1).click({force:true})
//        //validate header ttext
//          cy.get('.A-TYPS1L-RW-DEV.m-xsm-12.m-mdsm-10.m-md-8').should('have.text','Credit cards')
//          // validate credit cards
//          cy.get('#chp_main_link_1').should('be.visible')
//          cy.get('#chp_main_link_2').should('be.visible')
//          cy.get('#chp_main_link_3').should('be.visible')
//          //validate 
//          //cy.get('#chp_main_link_3').should('have.attr', 'data-event-name','hsbc premier credit card')
//         // cy.get('#chp_main_link_1 > .A-LNKC16R-RW-ALL > .link').should('have.attr', 'data-event-name')
         cy.get('#chp_main_link_2 > .A-LNKC16R-RW-ALL > .link').should('have.text','HSBC Cashback Credit Card')
// compare -9

























































































    })
})
