export class register{

    uploadResume(){
        cy.get('input[type="file"]').attachFile('PUNIT_VASHISTH_RESUME.pdf');
        cy.wait(6000);
    };
    acceptTermsConditions(){
        cy.get('input[type="checkbox"]').click();
        cy.contains("Accept Terms and Conditions").click();
    };
    trueTalentReader(){
        cy.wait(10000);
        cy.get('input[type="submit"]').click();
    };
    fillByNameField(key, value){
        cy.get(`input[name=${key}]`).eq(0).type(value, {force: true});
    };
    selectLocation(location, suggestedLocation){
        cy.get('input[name="location_id"]').type(location);
        cy.get('.input-group').next().children().find('p').contains(suggestedLocation).click();

    };
    fillByClassField(className, value){
        cy.get(`.${className}`).type(value);
    };
    selectSkillExperience(skill, number){
        cy.get('#Skills').children().find('div').contains(skill).click();
        cy.get('.accordion-item').within(()=>{
            cy.get('#year').select(number);
        })
    };
    fillEducationDuration(University, Degree, startDate, endDate){
        cy.get('#awarded_by').click().type(University);
        cy.get('input[name="title"]').click().type(Degree);
        cy.get('.react-datepicker__input-container').eq(0).click().type(startDate);
        cy.get('.react-datepicker__input-container').eq(1).click().type(endDate);
    };
  
    




}