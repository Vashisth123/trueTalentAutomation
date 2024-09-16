export class common{

    validateText(text){
        cy.contains(text).should('be.visible');
    };
    clickOnText(text){
        cy.contains(text).click();
    };
    validateLink(linkName, link){
        cy.contains(linkName).should('have.attr', 'href', link);
    }


}