this test file is not related project . pls ignore
// import sammple from '../pageObjects/HSBCPAGE'
// describe('second test case',function(){
//     // beforeEach(function(){
//     //  cy.fixture(example.json).then(function(gata){
//     //  this.gata=gata
//     //  })
    
//     })
//         it('second test case', function(){
//             const page1 = new sammple();

//      cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
//      page1.Check_checkbox(
         
     // ).check().should('be.checked').and('have.value', 'option1')
     // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
     // cy.get('input[type ="checkbox"]').check(['option2', 'option3'])
     // cy.get('#dropdown-class-example').select('Option3')
     // cy.get('#autocomplete').type('ind')
     // cy.get('.ui-menu-item-wrapper').each(($e1, index, $list) => {
     //     if($e1.text() === 'India'){
     //         cy.wrap($e1).click()
     //     }
     // })
     // cy.get('#autocomplete').should('have.value', 'India')
     // cy.get('input[value ="Hide"]').click()
     // //cy.get('input[value ="Hide"]').should('not.be.visible')
     // cy.get('[value ="radio1"]').check().should('be.checked')
     // cy.get('[value="Alert"]').click()
     // cy.on('window:alert',(str) =>{
     //     expect(str).to.equal("Hello , share this practice page and share your knowledge")
     // })
     cy.get('#opentab').invoke('removeattr' , 'target').click();
     cy.origin("https://www.qaclickacademy.com/", () => {
    
     cy.get('[class ="button float-left"] a[class="main-btn"]').click();
     cy.get('info@qaclickacademy.com').should('contain' ,"info@qaclickacademy.com" );
     })
    
     
    
    
    
    
    
    
        })
