export class homePage{
acceptCookie(status){

    cy.get(`#hs-eu-${status}-button`).click();
}
validateLanguageDropdown(index , value){
   for(let i =0; i<index.length; i++){
   cy.get('select').select(index[i]);
   cy.contains(value[i]).should('be.visible');
   };
   cy.get('select').select(index[1]);
};
closeContent(){
    cy.get('.close').should('not.be.visible');
}


}