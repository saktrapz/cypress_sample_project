import LoginPage from '../Pages/loginPage';

describe('Login Tests', () => {
  it('Valid Login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();
    
    cy.get('.app_logo').should('have.text', 'Swag Labs')
  });
  it('Login with invalid username', () => {
    LoginPage.visit();
    LoginPage.fillUsername('eeeewwwwww');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });
  it('Login with invalid password', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('ss12312312');
    LoginPage.submit();
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });
});