class creditcardpage{

  


  
    getNavigationtitle(){
        return cy.get('nav.header-main-navigation.lg-10 .header-main-navigation-title').eq(1).trigger('mouseover')
    }
    getcreditcards(){

        return cy.get('a[href="https://www.hsbc.co.in/credit-cards/"] h2').eq(1).click({force:true}) 
    }
    getbanner(){
        return cy.get('#listing_intro_hero_banner_2')
    .find('.A-TYP38L-RW-ALL.text-container.text').trigger('mouseover')
    }
    getvisibletext(){
        return cy.get('.A-BTNP-RW-ALL span:nth-child(1)')

    }
    get_image(){
        return cy.get('#listing_main_image_1')

    }
    getcontainertext(){
        return cy.get('.A-LNKND38L-RW-ALL.text-container.text')
    }
    getbutton1(){

        return cy.get('#listing_main_button_1')
    }
    getbutton2(){
        return cy.get('#listing_main_button_2')
    }
    getbutton3(){
        return cy.get('#listing_main_button_3')
    }
    click_button(){
        return cy.get('#listing_main_button_1')
    }
    close_button(){
        return cy.get('.close-button')

    }
    label_checkbox(){
        return cy.get('.label-for-checkbox')
    }
    checkbox_1(){
        return cy.get('[role="checkbox"]')
    }
    button_click(){
        return cy.get('.A-BTNP-RW-ALL')
    }
    product_title(){
        return cy.get('#pp_tools_productComparator_2-title')
    }
    visible_text(){
        return  cy.get(':nth-child(1) > .A-TYPS7R-RW-DEV > [aria-hidden="true"]')
    }
click_on_visibletext(){
    return cy.get(':nth-child(2) > .A-TYPS7R-RW-DEV > [aria-hidden="true"]')
}
    title_checkbox(){
        return cy.get('.container-title-checkbox')
    }
    getarrayele(){
        return cy.get('[role="checkbox"]')
    }
    clickaction(){
        return cy.get('.A-BTNP-RW-ALL')
    }
    getloadedtitle(){
        return  cy.get('.A-TYPS4L-RW-DEV.title.title-loaded')
    }
    getlinkiconclear(){
        return cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon')
    }
    getproductcashcard(){
        return cy.get('.product-select [data-product-type="cashback-credit-card"]')
    }
    validate_length(){
        return  cy.get('.A-TYPS4L-RW-DEV.title.title-loaded')
    }
    clickop(){
        return cy.get(':nth-child(3) > .A-TYPS7R-RW-DEV')
    }
    closebutton(){
        return cy.get('.close-button')
    }


}
export default creditcardpage;
