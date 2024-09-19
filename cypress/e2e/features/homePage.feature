Feature: Validate the successful registration flow

Scenario: Validate the registration flow
Given I navigate to preprod environment for site trueTalent
And I close the information banner
When I click on Register
And I click on I'm a candidate
Then I should see text Upload Your Resume
When I upload the resume
And I accept the terms and conditions
Then I should see text TrueTalent Resume Reader
When I accept true talent reader condition
Then I should see text Personal Details
When I fill the text in the registration form
And I enter location and select from suggetion box
And I enter summary in the Professional experience field
And I select skill Java and experience of 4 year
And I click on Add Education
Then I should see text School/University/Institution
When I enter education details
And I click on Save
Then I should see text Personal Details
When I click on Next



# And Link name Company should have link /company/
# And Link name Support should have link /support/
# When I click on Close
# Then I should not see Register Now banner