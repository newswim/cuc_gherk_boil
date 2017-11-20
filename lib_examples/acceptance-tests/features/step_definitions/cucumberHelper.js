// Helper to abstract away the selected tech
// Nightmare.js in this case

const assert = require('assert');

const formatResult = function (success, expected, actual) {
  return {
    success,
    expected,
    actual,
  };
};

module.exports = class CucumberHelper {
  static isLoginText(nightmare, callback) {
    return nightmare
    .wait('h1')
    .evaluate(() => document.querySelector('h1').innerText)
    .then((result) => {
      assert.equal(result, 'Hi there!');
      callback(null, formatResult(true, 'Hi there!', 'Hi there!'));
    })
    .catch((err) => {
      callback(null, formatResult(false, 'Hi there!', err));
    });
  }

  constructor(protocol, domain, basicAuthUser = '', basicAuthPassword = '') {
    this.domain = `${protocol}://${domain}`;
    this.basicAuthUser = basicAuthUser;
    this.basicAuthPassword = basicAuthPassword;
  }

  goTo(nightmare, callback) {
    return nightmare
    .authentication(this.basicAuthUser, this.basicAuthPassword)
    .goto(this.domain)
    .then(() => {
      callback(null, formatResult(true, 'Page loaded', 'Page loaded'));
    })
    .catch((err) => {
      callback(err, formatResult(false, 'Page loaded', err));
    });
  }
};
