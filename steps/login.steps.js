const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPage');

Given(/^User is on the login screen$/, async () => {
    // Code to navigate to the login screen
});

When(/^User enters "(.*)" and "(.*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^User should be logged in successfully$/, async () => {
    // Code to verify successful login
});

Then(/^User should see an error message$/, async () => {
    const errorMessage = await LoginPage.getErrorMessageText();
    // Code to verify error message
});
