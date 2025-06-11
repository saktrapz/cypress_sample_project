import LoginPage from '../Pages/loginPage';

describe('Login Tests', () => {
  it('Valid Login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();
    
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
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
  it('Login with empty username', () => {
    LoginPage.visit();
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username is required')
  });
  it('Login with empty password', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.submit();
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Password is required')
  });
  it('Login with Locked account', () => {
    LoginPage.visit();
    LoginPage.fillUsername('locked_out_user');
    LoginPage.fillPassword('secret_sauce')
    LoginPage.submit();
    
    LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  });
});