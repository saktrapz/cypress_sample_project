class ProductPage {

  addToCartButton(){
    return cy.get('[data-test="inventory-container"]').find('[data-test^="add-to-cart"]');
  }

  inventoryRemoveButton(){
    return cy.get('[data-test="inventory-container"]').find('[data-test^="remove"]');
  }

  cartRemoveButton(){
    return cy.get('[data-test="inventory-item"]').find('[data-test^="remove"]');
  }

  cartButton(){
    return cy.get('[data-test="shopping-cart-link"]');
  }

  cartCount(){
    return cy.get('[data-test="shopping-cart-badge"]');
  }

  checkoutButton(){
    return cy.get('[data-test="checkout"]');
  }

  burgerMenu(){
    return cy.get('#react-burger-menu-btn');
  }

  logoutButton(){
    return cy.get('[data-test="logout-sidebar-link"]')
  }
}

export default new ProductPage();