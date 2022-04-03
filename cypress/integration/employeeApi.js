describe("Test suites of Employee API", function () {
  beforeEach(function () {
    cy.fixture(Cypress.env("fixtureFile")).then((data) => {
      this.data = data;
    });
  });

  it("Should Verify Employee Salary", function () {
    cy.request({
      method: "GET",
      url: " " + Cypress.env("apiUrl"),
    })
      .its("body")
      .then((body) => {
        for (var i = 0; i < body.length; i++) {
          console.log(body);
          console.log(body.length);
          var obj = body[i];
          console.log(obj[16]);
          if (obj.employee_name == "Michael Silva") {
            expect(obj.employee_salary).to.eq("198500");
          }
        }
      });
  });
});
