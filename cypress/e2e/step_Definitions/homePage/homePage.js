import { homeLocators } from "../../locators/locators";
export class homePage{
closeBanner(status){

    cy.get(homeLocators.bannerClose).click({force: true});
}
validateLanguageDropdown(index , value){
   for(let i =0; i<index.length; i++){
   cy.get('select').select(index[i]);
   cy.contains(value[i]).should('be.visible');
   };
   cy.get('select').select(index[1]);
};
closeContent(){
    cy.get(homeLocators.crossButton).should('not.be.visible');
};


}