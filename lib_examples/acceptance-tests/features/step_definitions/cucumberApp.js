const Nightmare = require('nightmare');
const { defineSupportCode } = require('cucumber');

const CucumberHelper = require('./cucumberHelper.js');

const DEFAULT_TIMEOUT_MS = (15 * 1000);

if (!process.env.TARGET_HOST) {
  process.exit(1);
}

const TARGET_HOST = process.env.TARGET_HOST;

const handleTestResult = (error, testResult, callback) => {
  if (error) {
    callback(new Error(error));
  }

  if (testResult.success === true) {
    callback();
  } else {
    callback(JSON.stringify(testResult));
  }
};


defineSupportCode(({ Given, Then, When, registerHandler, Before, After, setDefaultTimeout }) => {
  // Cucumber setup

  setDefaultTimeout(DEFAULT_TIMEOUT_MS);

  registerHandler('BeforeFeatures', (features, callback) => {
    console.log('The Nightmare begins..');
    console.log('Target host: ', TARGET_HOST);
    this.nightmare = {};
    this.helper = new CucumberHelper(
      'https',
      TARGET_HOST,
      process.env.BASIC_AUTH_USER,
      process.env.BASIC_AUTH_PASSWORD);
    callback();
  });

  Before((scenario, callback) => {
    this.nightmare = Nightmare({ show: false });
    callback();
  });

  After((scenario, callback) => {
    this.nightmare.end();
    callback();
  });

  registerHandler('AfterFeatures', () => {
    console.log('..and finally the nightmare ends..');
  });

  // Cucumber test handlers

  Given(/^I visit the service website$/, (callback) => {
    this.helper.goTo(this.nightmare, (error, testResult) => {
      handleTestResult(error, testResult, callback);
    });
  });

  Then(/^I have access to the service login/, (callback) => {
    CucumberHelper.isLoginText(this.nightmare, (error, testResult) => {
      handleTestResult(error, testResult, callback);
    });
  });

  When(/^I login into the service with valid credentials/, (callback) => {
    callback();
  });

  Then(/^I have access to the counter features/, (callback) => {
    callback();
  });

  When(/^I logout from the service/, (callback) => {
    callback();
  });

  Given(/^I'm a permitted counter feature user$/, (callback) => {
    callback();
  });

  Then(/^the counter value is a positive number$/, (callback) => {
    callback();
  });

  When(/^I increment the counter/, (callback) => {
    callback();
  });

  Then(/^the counter value is incremented$/, (callback) => {
    callback();
  });
});
