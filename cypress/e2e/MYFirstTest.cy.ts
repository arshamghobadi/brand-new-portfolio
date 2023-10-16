describe('My first Test', () => {
  it('verify title-positve', () => {
    cy.visit('https://arsham-ghobadi-portfolio.vercel.app/');
    cy.title().should('eq', 'Arsham Ghobadi Portfolio');
  });
});
