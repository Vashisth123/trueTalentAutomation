import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import {common} from "./common";
const commonComp = new common();

When(/^I click on (.*$)/, (text)=>{
    commonComp.clickOnText(text);
    });
    When(/^I force click on (.*$)/, (text)=>{
        commonComp.clickForceOnText(text);
        });

Then(/^I should see text (.*)$/, (text)=>{
commonComp.validateText(text);
});
Then(/^Link name (.*) should have link (.*)$/, (linkName, link)=>{
commonComp.validateLink(linkName, link);
})