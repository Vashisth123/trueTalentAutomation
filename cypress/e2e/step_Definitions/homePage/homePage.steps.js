import {Given , When, Then} from "cypress-cucumber-preprocessor/steps";
import {homePage} from "./homePage";
import homePageData from "../../../fixtures/homePageData.json"
const homePageObj = new homePage();
Given(/^I navigate to (.*) environment for site trueTalent$/, (env)=>{
cy.navigateToURL(env);
});
When(/^I close the information banner$/, ()=>{
    homePageObj.closeBanner();
});

When(/^I validate values in language dropdown$/, ()=>{
    let index = Object.keys(homePageData.languageDropdown);
    const numberIndex = index.map(Number);
    let values = Object.values(homePageData.languageDropdown);
    homePageObj.validateLanguageDropdown(numberIndex, values);
});
Then(/^I should not see Register Now banner$/, ()=>{
    homePageObj.closeContent();
})
