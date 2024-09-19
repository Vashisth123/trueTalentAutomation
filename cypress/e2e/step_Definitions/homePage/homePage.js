export class homePage{
closeBanner(status){

    cy.get('.close-btn').eq(1).click({force: true});
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
};


}