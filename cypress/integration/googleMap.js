import GoogleMap from "../support/pages/googleMapPO";

const googleMapPage = new GoogleMap();

describe("Test suites of Employee API", function () {
  before(function () {
    cy.visit(Cypress.env("googleMapUrl"));
  });

  beforeEach(function () {
    cy.fixture(Cypress.env("fixtureFile")).then((data) => {
      this.data = data;
    });
  });

  it("Should Verify Google Map Search", function () {
    googleMapPage.verifySearch();
  });
});
