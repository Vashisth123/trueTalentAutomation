import {registerLocators} from "../../locators/locators";
export class register{

    uploadResume(){
        cy.get(registerLocators.resumeUpload).attachFile('PUNIT_VASHISTH_RESUME.pdf');
        cy.wait(6000);
    };
    acceptTermsConditions(){
        cy.get(registerLocators.selectCheckbox).click();
        cy.contains("Accept Terms and Conditions").click();
    };
    trueTalentReader(){
        cy.wait(10000);
        cy.get(registerLocators.submitButton).click();
    };
    fillByNameField(key, value){
        cy.get(`input[name=${key}]`).eq(0).type(value, {force: true});
    };
    selectLocation(location, suggestedLocation){
        cy.get(registerLocators.enterLocation).type(location);
        cy.get(registerLocators.inputLocation).next().children().find('p').contains(suggestedLocation).click();

    };
    fillByClassField(className, value){
        cy.get(`.${className}`).type(value);
    };
    selectSkillExperience(skill, number){
        cy.get(registerLocators.skill).children().find('div').contains(skill).click();
        cy.get(registerLocators.accordianBox).within(()=>{
            cy.get(registerLocators.year).select(number);
        })
    };
    fillEducationDuration(University, Degree, startDate, endDate){
        cy.get(registerLocators.universityField).click().type(University);
        cy.get(registerLocators.degreeField).click().type(Degree);
        cy.get(registerLocators.duraationCalender).eq(0).click().type(startDate);
        cy.get(registerLocators.duraationCalender).eq(1).click().type(endDate);
    };
  
    




}