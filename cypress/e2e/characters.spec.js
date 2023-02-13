describe("characters", () => {
  context("iajdioaidj", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/characters");

      cy.intercept("GET", "**/character", {
        fixture: "characters-response.json",
      }).as("getCharacters");
    });

    it("passes", () => {
      cy.wait("@getCharacters");

      cy.getByTestId("search").type("Rick");

      cy.get("p").eq(0).contains("Rick Sanchez");

      // cy.get("a").eq(0).click();

      // cy.location("pathname").should("eq", "/");
    });
  });
});
