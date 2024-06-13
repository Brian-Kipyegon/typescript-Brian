describe('Google test', () => {
  it('Test Google', () => {
    cy.visit('https://google.com');
    cy.get('.gLFyf')
      .type('Automation Step by step')
      .type('{enter}');
  })
})