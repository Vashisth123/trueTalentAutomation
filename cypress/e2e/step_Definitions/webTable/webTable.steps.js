import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import {webTable} from "./webTable";
const webTableObj = new webTable();
Given(/^I navigate to (.*)$/,(url)=>{
    webTableObj.navigateToUrl(url);
});
Then(/^I validate the row cell count of Pagination table$/, ()=>{
    webTableObj.validatetableCount();
});
Then(/^I validate specific cell value$/,()=>{
    webTableObj.validateSelectedCell();
});
Then(/^I validate all rows value$/, ()=>{
    webTableObj.getAllRowsValue();
});
Then(/^I validate the pagination data$/, ()=>{
    webTableObj.pagination();
})
