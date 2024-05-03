/// <reference types = "cypress"/>
describe('HSBC', function(){
// let data; //closure variable
// before(() => {
//   cy.fixture('fixtures.json').then((example) => {
//       data = fData;
//   });
//     })
    it('credit card flow', function(){
      cy.visit('https://www.hsbc.co.in')
      cy.get('nav.header-main-navigation.lg-10 .header-main-navigation-title').eq(1).trigger('mouseover')
      
      //cy.get('ul li:nth-child(1) a[href="/credit-cards/products/visa-cashback/"]').eq(1).should('be.visible')
     cy.get('a[href="https://www.hsbc.co.in/credit-cards/"] h2').eq(1).click({force:true})  
    cy.get('#listing_intro_hero_banner_2')
    .find('.A-TYP38L-RW-ALL.text-container.text').trigger('mouseover')
    
        // const credit_text = vali.text()
        // cy.get(vali).should('contains', credit_text)
    
    cy.get('.A-BTNP-RW-ALL span:nth-child(1)').should('be.visible')
    const allcards = [
        "HSBC Cashback Credit Card",
        "HSBC Visa Platinum Credit Card", 
     "\n    \n    \n        \n        HSBC Premier Credit Card\n    \n"     
          
    
    
    
    
    ]
    // cy.get('.A-LNKND38L-RW-ALL.text-container.text').each((el , index ,list)=>{
    //     expect(list).to.have.length(3);
    //     cy.wrap(el).should('contain.text', allcards[index]);
    
    
    // })
    
    cy.get('#listing_main_image_1').should('be.visible')
    cy.get('.A-LNKND38L-RW-ALL.text-container.text').first().should('contain.text', 'HSBC Cashback Credit Card')
    cy.get('#listing_main_button_1').should('be.visible')
    cy.get('#listing_main_button_2').should('be.visible')
    cy.get('#listing_main_button_3').should('be.visible')
    cy.get('#listing_main_button_1').click()
    cy.get('.close-button').should('be.visible')
    //cy.get('#title-pp_tools_productComparator_4').should('contain.text','Select cards to compare')
    const popup = [
        "Premier Credit Card",
        "Cashback Credit Card",    
    "Visa Platinum Credit Card",
    
    
    
    ]
    // const popup1 = [
        
    //     "Cashback Credit Card",    
    // "Visa Platinum Credit Card",
    // "Premier Credit Card",
    
    // ]
    cy.get('.label-for-checkbox').each((el , index ,list)=>{
          expect(list).to.have.length(3);
          cy.wrap(el).should('contain.text', popup[index]);
        
        
        })
       // cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox').click()
        cy.get('[role="checkbox"]').eq(1).click();
        //cy.get('.modal-checkbox').eq(2).check()
        cy.get('.A-BTNP-RW-ALL').click()
        cy.get('#pp_tools_productComparator_2-title').should('be.visible')
        cy.get(':nth-child(1) > .A-TYPS7R-RW-DEV > [aria-hidden="true"]').should('be.visible')
        cy.get(':nth-child(2) > .A-TYPS7R-RW-DEV > [aria-hidden="true"]').click()
    
        cy.get('.container-title-checkbox').each(($el , index, list)=>{
    
         
          $el.find('.modal-checkbox').click()
            
         })
         cy.fixture('example').then((example) => {
         example.popup1.forEach(function(ele)
             {
            cy.get('[role="checkbox"]')
           
               })
            })
          
        // cy.get('[data-product-type="visa-platinum-credit-card"] > .container-title-checkbox > .modal-checkbox').click()
        // cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox').click()
        //cy.get('.container-title-checkbox .modal-checkbox').click()
        cy.get('.A-BTNP-RW-ALL').click()
    
        cy.get('.A-TYPS4L-RW-DEV.title.title-loaded').each(($el, index, list)=>{
            //expect(list).to.have.length(3);
            cy.wrap($el).should('contain.text', example.popup1[index]);
            
    
         
    
        })
        cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon').should('be.visible')
        cy.get('.product-select [data-product-type="cashback-credit-card"]').click()
        cy.get('.A-TYPS4L-RW-DEV.title.title-loaded').its('length').should('eq', 1)
        cy.get(':nth-child(3) > .A-TYPS7R-RW-DEV').click()
        cy.get('.close-button').click()
            
    
        
    
        })
    
    
    
    })