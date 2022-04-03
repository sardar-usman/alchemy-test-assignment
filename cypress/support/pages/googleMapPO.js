class GoogleMap {
  getSearchInputSelector() {
    return "#searchboxinput";
  }

  getRowsSelector() {
    return '[role="row"]';
  }
  verifySearch() {
    cy.get(this.getSearchInputSelector()).type("Dublin");
    cy.get('span:contains("Dublin")').should("be.visible");
    cy.get(this.getRowsSelector()).should("have.length", 5);
  }
}
export default GoogleMap;
