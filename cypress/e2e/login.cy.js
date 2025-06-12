import LoginPage from '../Pages/loginPage';
import "allure-cypress";
import * as allure from "allure-js-commons";

describe('Login Tests', () => {
  beforeEach(() => {
    allure.step('Visit Login Page', () => {
      LoginPage.visit();
    });
  });

  it('Valid Login', () => {
    allure.step('Enter valid username and password', () => {
      LoginPage.fillUsername('standard_user');
      LoginPage.fillPassword('secret_sauce');
    });

    allure.step('Click the Login button', () => {
      LoginPage.submit();
    });

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });
  it('Login with invalid username', () => {
    allure.step('Enter invalid username and valid password', () => {
      LoginPage.fillUsername('eeeewwwwww');
      LoginPage.fillPassword('secret_sauce');
    });

    allure.step('Click the Login button', () => {
      LoginPage.submit();
    });
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });
  it('Login with invalid password', () => {
    allure.step('Enter valid username and invalid password', () => {
      LoginPage.fillUsername('standard_user');
      LoginPage.fillPassword('ss12312312');
    });

    allure.step('Click the Login button', () => {
      LoginPage.submit();
    });
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });
  it('Login with empty username', () => {
    allure.step('Leave username field empty and enter valid password', () => {
      LoginPage.fillPassword('secret_sauce');
    });

    allure.step('Click the Login button', () => {
      LoginPage.submit();
    });
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username is required')
  });
  it('Login with empty password', () => {
    allure.step('Enter valid username and leave password field empty', () => {
      LoginPage.fillUsername('standard_user');
    });

    allure.step('Click the Login button', () => {
      LoginPage.submit();
    });
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Password is required')
  });
  it('Login with Locked account', () => {
    allure.step('Enter locked account credentials', () => {
      LoginPage.fillUsername('locked_out_user');
      LoginPage.fillPassword('secret_sauce');
    });

    allure.step('Click the Login button', () => {
      LoginPage.submit();
    });
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  });
});