import "allure-cypress";
import * as allure from "allure-js-commons";

class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  validLogin(){
    allure.step('Visit Login Page', () => {
      this.visit();
    });
    allure.step('Enter valid username and password', () => {
      this.fillUsername('standard_user');
      this.fillPassword('secret_sauce');
    });

    allure.step('Click the Login button', () => {
      this.submit();
    });
  }
}

export default new LoginPage();