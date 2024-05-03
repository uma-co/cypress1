class Example2{

    getScrolldown(){
       return  cy.get('nav > .footer-large > :nth-child(2) > a')
    }
    mainButton(){
   
        return cy.get('#content_main_button_1')
    }
    getInput(){
        return cy.get('#searchInput')

    }
    getAutocomplete(){
        return cy.get('#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc')

    }
    check_disbaled(){
        return cy.get('.A-BTN.dyDtMFJhIxIve49jQf34.F2AanyfgyiGzuY7KkfBN')
    }
    validate_text(){
        return cy.get('.uItFVQvJsoQVBXhG5ERC.RGdv28Je743np867Aqn2.uMnz0NVk0q4GZCWEszUD')

    }
    getText(){
        return cy.get('.right-column span')
    }
    getHeader(){
        return  cy.get('div.header-logo.lg-2 [alt="HSBC India Bank"]')

    }
    getFooter(){
        return cy.get('.lg-7 .footer-supplementary.clearfix li:nth-child(3) a')
    }
    


























}
export default Example2