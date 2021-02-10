/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

beforeEach(() => {
  cy.visit("https://template1.booost.bg/feello/index");
});

it("Shoud have visible active readers element", () => {
  cy.get(".right-content > p").should("be.visible");
});

it("Shoud not have visible active readers after the viewport is iphone-6", () => {
  cy.viewport("iphone-6");
  cy.get(".right-content > p").should("not.be.visible");
});

it("Should have link logo which has a width less than 101 in portrait mode", () => {
  cy.viewport("iphone-6");
  cy.get("a > img")
    .should("have.css", "width")
    .then(parseFloat)
    .and("be.lessThan", 101);
});

it("Should have link logo which has a width less than 121 in landscape mode", () => {
  cy.viewport("iphone-6", "landscape");
  cy.get("a > img")
    .should("have.css", "width")
    .then(parseFloat)
    .and("be.lessThan", 121);
});

it("Should have hamburger button not visible", () => {
  cy.get(".manu-btn").should("not.be.visible");
});

it("Should have hamburger button visible after viewport change", () => {
  cy.viewport(990, 768);
  cy.get(".manu-btn").should("be.visible");
});

it.only("Should open menu after hamburger button click, and close it after pressing X ", () => {
  cy.viewport(990, 768);
  cy.get(".manu-btn").click();
  cy.get(".manu-list").should("be.visible");
  cy.get(".close-btn").click();
  cy.get(".manu-list").should("not.be.visible");
});
