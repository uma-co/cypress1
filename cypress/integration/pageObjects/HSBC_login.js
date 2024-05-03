class HSBC_login{

Continue(){

    return cy.get(':nth-child(5) > .col-sm-12');
}

getUsername(){

    return cy.get('#username');
}
subutton(){

    return cy.get('#username_submit_btn');
}
gettoolTip(){
    return cy.get('#not_register > [role="text"]');

}
Tooltipclicking(){

    return cy.get('#not_register > [role="text"]');
}


}
export default HSBC_login;