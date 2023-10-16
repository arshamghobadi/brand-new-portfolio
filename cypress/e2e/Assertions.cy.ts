describe('Assertions demo', () => {
  it('Impicit assertions', () => {
    cy.visit('https://arsham-ghobadi-portfolio.vercel.app/');
    cy.url().should('include', 'vercel.app');
    cy.url().should('eq', 'https://arsham-ghobadi-portfolio.vercel.app/');
  });
});
