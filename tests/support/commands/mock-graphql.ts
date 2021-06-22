const responseStub = (result): unknown => Promise.resolve({
  json: () => Promise.resolve(result),
  text: () => Promise.resolve(JSON.stringify(result)),
  ok: true,
});

Cypress.Commands.add('mockGraphQL', (handler) => {
  cy.on('window:before:load', (win) => {
    const originlaFetch = win.fetch;

    function fetch(path, { body, method }): unknown {
      if (path.includes('/graphql') && method === 'POST') {
        return responseStub(handler(JSON.parse(body)));
      }

      return originlaFetch.apply(this, arguments); // eslint-disable-line prefer-rest-params
    }

    cy.stub(win, 'fetch').callsFake(fetch);
  });
});
