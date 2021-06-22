Cypress.Commands.overwrite('visit', (visit, url, options) => {
  url = Cypress.env('ENVIRONMENT') === 'prod'
    ? url.replace(/\/?$/, '/index.html')
    : url;

  return visit(url, options);
});
