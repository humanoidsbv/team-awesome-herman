describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);

    cy.get(".cUPEOE").should("exist");
    cy.get(".cUPEOE").click();
    cy.wait(2000);

    cy.get(".okulo").contains("Team members").should("exist");
    cy.get(".okulo").contains("Team members").click();
    cy.wait(2000);

    cy.get(".cUPEOE").click();
    cy.wait(2000);

    cy.get(".okulo").contains("Timesheets").click();
    cy.wait(2000);

    cy.get(".hxeFdb").click();
    cy.wait(2000);

    cy.get("[data-cy=client-input]").type("Nike");
    cy.get("[data-cy=activity-input]").type("Development");
    cy.get("[data-cy=date-input]").type("2020-03-28");
    cy.get("[data-cy=timefrom-input]").type("16:00");
    cy.get("[data-cy=timeto-input]").type("19:00");

    cy.get(".hxeFdb").contains("Add time entry").click();
    cy.wait(2000);

    cy.get(".iZHwAb").contains("Cancel").click();
  });
});
