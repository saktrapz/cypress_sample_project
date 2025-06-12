import loginPage from "../Pages/loginPage";
import productPage from "../Pages/productPage";
import checkoutPage from "../Pages/checkoutPage";
import "allure-cypress";
import * as allure from "allure-js-commons";

describe('Product and Cart functionality', () => {
     beforeEach(() => {
          loginPage.validLogin();
     });
     
     it('Add Item to Cart from Product Page', () => {
          allure.step('Add Sauce Labs Backpack to cart', () => {
               productPage.addToCartButton().eq(0).click();
          });

          productPage.inventoryRemoveButton().eq(0).should('contain', 'Remove');
          productPage.cartCount().should('have.text', '1');
     });

     it('Remove Item from Cart on Product Page', () => {
          allure.step('Add Sauce Labs Backpack to cart first', () => {
               productPage.addToCartButton().eq(0).click();
               productPage.cartCount().should('have.text', '1');
          });
         
          allure.step('Click "Remove" button for Sauce Labs Backpack', () => {
               productPage.inventoryRemoveButton().eq(0).click();
          });

          productPage.addToCartButton().eq(0).should('contain', 'Add to cart');
          productPage.cartCount().should('not.exist');
     });

     it('View Items in Shopping Cart', () => {
          allure.step('Add two items to the cart', () => {
               productPage.addToCartButton().eq(0).click();
               productPage.addToCartButton().eq(1).click();
          });

          allure.step('Click on cart button', () => {
               productPage.cartButton().click();  
          });

          cy.get('[data-test="inventory-item"]').should('have.length', 2);
          cy.get('[data-test="inventory-item"]').find('[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Backpack');
          cy.get('[data-test="inventory-item"]').find('[data-test="inventory-item-name"]').eq(1).should('contain', 'Sauce Labs Bolt T-Shirt');
     });
     
     it('Remove Item from Cart Page', () => {
          allure.step('Add Sauce Labs Backpack to cart', () => {
               productPage.addToCartButton().eq(0).click();
          });

          allure.step('Click on cart button', () => {
               productPage.cartButton().click();  
          });

          allure.step('Click "Remove" button for the item in the cart', () => {
               productPage.cartRemoveButton().eq(0).click();
          });
          
          cy.get('[data-test="inventory-item"]').should('not.exist');
          productPage.cartCount().should('not.exist');
     });

     it('Checkout Process', () => {
          allure.step('Add Sauce Labs Backpack to cart', () => {
               productPage.addToCartButton().eq(0).click();
               productPage.cartCount().should('have.text', '1');
          });
          allure.step('Navigate to Cart and then Checkout Information page', () => {
               productPage.cartButton().click();
               productPage.checkoutButton().click();
          });

          allure.step('Fill in customer information', () => {
               checkoutPage.fillFirstName('John');
               checkoutPage.fillLastName('Doe');
               checkoutPage.fillPostalCode('12345');
          });

          allure.step('Click on continue button', () => {
               checkoutPage.continueButton();
          });

          allure.step('Click on finish button', () => {
               checkoutPage.finishButton();
          });

          cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
     });

     it('Logout', () => {
          allure.step('Click the burger menu to open navigation', () => {
               productPage.burgerMenu().click();
          });

          allure.step('Click the Logout button', () => {
               productPage.logoutButton().click();
          });

          cy.url().should('include', '/');
          cy.get('[data-test="login-button"]').should('be.visible');

     });
});