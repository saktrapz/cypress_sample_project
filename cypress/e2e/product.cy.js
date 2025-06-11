import loginPage from "../Pages/loginPage";
import productPage from "../Pages/productPage";
import checkoutPage from "../Pages/checkoutPage";

describe('Product and Cart functionality', () => {
     beforeEach(() => {
          loginPage.validLogin();
     });
     
     it('Add Item to Cart from Product Page', () => {
          productPage.addToCartButton().eq(0).click();

          productPage.inventoryRemoveButton().eq(0).should('contain', 'Remove');
          productPage.cartCount().should('have.text', '1');
     });

     it('Remove Item from Cart on Product Page', () => {
          productPage.addToCartButton().eq(0).click();
          productPage.inventoryRemoveButton().eq(0).click();

          productPage.addToCartButton().eq(0).should('contain', 'Add to cart');
          productPage.cartCount().should('not.exist');
     })

     it('View Items in Shopping Cart', () => {
          productPage.addToCartButton().eq(0).click();
          productPage.addToCartButton().eq(1).click();
          productPage.cartButton().click();

          cy.get('[data-test="inventory-item"]').should('have.length', 2);
          cy.get('[data-test="inventory-item"]').find('[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Backpack');
          cy.get('[data-test="inventory-item"]').find('[data-test="inventory-item-name"]').eq(1).should('contain', 'Sauce Labs Bolt T-Shirt');
     });
     
     it('Remove Item from Cart Page', () => {
          productPage.addToCartButton().eq(0).click();
          productPage.cartButton().click();

          productPage.cartRemoveButton().eq(0).click();
          
          cy.get('[data-test="inventory-item"]').should('not.exist');
          productPage.cartCount().should('not.exist');
     });

     it('Checkout Process', () => {
          productPage.addToCartButton().eq(0).click();
          productPage.cartButton().click();
          productPage.checkoutButton().click();

          checkoutPage.fillFirstName('John');
          checkoutPage.fillLastName('Doe');
          checkoutPage.fillPostalCode('12345');
          checkoutPage.continueButton();
          checkoutPage.finishButton();

          cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
     })

     it('Logout', () => {
          productPage.burgerMenu().click();
          productPage.logoutButton().click();

          cy.url().should('include', '/');

     });
});