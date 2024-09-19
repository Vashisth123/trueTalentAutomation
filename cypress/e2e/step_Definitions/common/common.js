export class common{

    validateText(text){
        cy.contains(text).should('be.visible');
    };
    clickOnText(text){
        cy.contains(text).click();
    };
    clickForceOnText(text){
        cy.contains(text).click({force:true});
    };
    validateLink(linkName, link){
        cy.contains(linkName).should('have.attr', 'href', link);
    }


}