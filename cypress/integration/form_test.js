describe("Form inputs", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3001/pizza");
    cy.url().should("include", "localhost");
  });

  it("grab name input, type joey in it & verify joey is in it", () => {
    cy.get("input[name='name']").type("joey").should("have.value", "joey");
  });

  it("verify that pepperoni can be selected", () => {
    cy.get('input[name="pepperoni"]').check();
  });

  it("verify that sausage can be selected", () => {
    cy.get('input[name="sausage"]').check();
  });

  it("verify that order button can be clicked", () => {
    cy.get("button.submit").click();
  });
});

// cy.get("button.submit").click();
// it("can click Pizza? button", () => {
//     cy.get("button.pizza").click();
//   });

// s
