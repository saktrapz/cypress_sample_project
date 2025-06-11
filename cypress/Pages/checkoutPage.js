class CheckoutPage {

  fillFirstName(firstName){
    cy.get('[data-test="firstName"]').type(firstName);
  }

  fillLastName(lastName){
    cy.get('[data-test="lastName"]').type(lastName);
  }

  fillPostalCode(postalCode){
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  continueButton(){
    cy.get('[data-test="continue"]').click();
  }

  finishButton(){
    cy.get('[data-test="finish"]').click();
  }
  
}

export default new CheckoutPage();