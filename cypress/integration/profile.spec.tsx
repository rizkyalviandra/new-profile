import { createYield } from "typescript";

describe("test profile page", () => {
  it("should to visit profile page", () => {
    cy.visit("http://localhost:3000");
  });
  it("should to change theme to dark", () => {
    cy.findByLabelText("colorMode").click();
  });
  it("should redirect to social media url", async () => {
    await cy.findByLabelText("linkedin").click();
    await cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/");
    });
  });
});
