describe('Behaviour: Navigation', () => {
  it('should navigate to an anchor', () => {
    cy.visit('/');
    cy.get('[href*="#main-footer"]').click({ force: true });
    cy.get('#main-footer').should('be.visible');
  });

  it('should navigate to an internal page', () => {
    cy.visit('/');

    cy.get('[href="/blog"').click({ force: true });
    cy.url().should('contain', '/blog');

    cy.get('[href="/"]').click();
    cy.url().should('contain', '/');
  });
});
