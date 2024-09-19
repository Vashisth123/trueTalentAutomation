import {Given , When, Then} from "cypress-cucumber-preprocessor/steps";
import {register} from "./register";
import registerPageData from "../../../fixtures/registerPage/registerPageData.json";
const registerObj = new register();
let locator = Object.keys(registerPageData.inputField);
let value = Object.values(registerPageData.inputField);

When(/^I upload the resume$/, ()=>{
    registerObj.uploadResume();
});
When(/^I accept the terms and conditions$/, ()=>{
    registerObj.acceptTermsConditions();
});
When(/^I accept true talent reader condition$/, ()=>{
    registerObj.trueTalentReader();
});
When(/^I fill the text in the registration form$/, ()=>{
   for(let i =0; i<locator.length; i++){
    registerObj.fillByNameField(locator[i], value[i]);
   }
});
When(/^I enter location and select from suggetion box$/, ()=>{
    registerObj.selectLocation(registerPageData.location.inputLocation,registerPageData.location.suggestedLoc)
});
When(/^I enter summary in the Professional experience field$/, ()=>{
    registerObj.fillByClassField(registerPageData.Summary.className, registerPageData.Summary.enterDetails);
});
When(/^I select skill (.*) and experience of (\d+) year$/,(skill, number)=>{
    registerObj.selectSkillExperience(skill, number);
});
When(/^I enter education details$/, ()=>{
       registerObj.fillEducationDuration(registerPageData.educationDetails.University, registerPageData.educationDetails.Degree, registerPageData.educationDetails.startDate, registerPageData.educationDetails.endDate);
})

