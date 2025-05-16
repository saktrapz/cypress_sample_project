import loginPage from "../Pages/loginPage";

describe('Login Tests', () => {

   it('Filter by A to Z', () => {
        loginPage.validLogin();
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
   });

   it('Filter by A to Z', () => {
        loginPage.validLogin();
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
   });

   it('Filter by A to Z', () => {
        loginPage.validLogin();
        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
   });
   
});
