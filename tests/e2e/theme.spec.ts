describe('Behaviour: Theme', () => {
  it('should start with the light theme', () => {
    cy.visit('/');
    cy.root().should('have.attr', 'data-theme', 'light');
  });

  it('should start with system theme', () => {
    const systemTheme = 'dark';

    cy.visit('/', {
      onBeforeLoad: (win) => {
        cy.stub(win, 'matchMedia')
          .withArgs(`(prefers-color-scheme: ${systemTheme})`)
          .returns({
            matches: true,
            addEventListener: () => undefined
          });
      },
    });

    cy.root().should('have.attr', 'data-theme', systemTheme);
  });

  it('should start with the preferred theme', () => {
    const preferredTheme = 'dark';

    localStorage.setItem('theme', preferredTheme);

    cy.visit('/');
    cy.root().should('have.attr', 'data-theme', preferredTheme);
  });

  it('should toggle the theme', () => {
    cy.visit('/');
    cy.findByTestId('toggle-theme').click();
    cy.root().should('have.attr', 'data-theme', 'dark');
    cy.findByTestId('toggle-theme').click();
    cy.root().should('have.attr', 'data-theme', 'light');
  });
});
