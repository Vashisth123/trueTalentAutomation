Feature: Validate Home page content

Scenario: Validate the links present on homepage
Given I navigate to prod environment for site Parasoft
And I Decline the cookies in the banner
#And I validate values in language dropdown
And Link name Company should have link /company/
And Link name Support should have link /support/
When I click on Close
Then I should not see Register Now banner