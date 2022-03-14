beforeEach(() => {
  cy.visit("http://localhost:3000/ ");
});

describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.get("[data-cy=menu-button]").should("exist");
    cy.get("[data-cy=menu-button]").click();
    cy.get("[data-cy=menu]").contains("Team members").click();
    cy.get("[data-cy=subheader]").should("contain", "Team members");

    cy.get("[data-cy=menu-button]").click();
    cy.get("[data-cy=menu]").contains("Timesheets").click();
    cy.get("[data-cy=subheader]").should("contain", "Timesheets");

    cy.get("[data-cy=subheader]").contains("Add new time entry").click();

    cy.get("[data-cy=client-input]").type("Nike");
    cy.get("[data-cy=activity-input]").type("Development");
    cy.get("[data-cy=date-input]").type("2020-03-28");
    cy.get("[data-cy=timefrom-input]").type("16:00");
    cy.get("[data-cy=timeto-input]").type("19:00");

    cy.get("[data-cy=dialog").contains("Add time entry").click();

    cy.get("[data-cy=dialog]").contains("Cancel").click();
  });
});
