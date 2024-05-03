class HSBCPAGE{


        logo(){
        
        return cy.get(".header-logo img");
        
        }
        getTitle(){
        
            return cy.title();
        }
         getLOgon(){
        
            return cy.get('li div .selected-item.login-button.only-one-link');
         }
         getLOgonHeader(){
        
            return cy.title();
         }
        
        
        
        
        
        
        
        
        
        }
        

export default HSBCPAGE;