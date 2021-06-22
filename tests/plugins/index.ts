/* eslint-disable */

module.exports = function (on, config) {
  /**
   * Arquivo responsável por carregar plugins
   * do framework de testes cypress.
   *
   * @see {https://docs.cypress.io/guides/tooling/plugins-guide.html}
   */
  require('@cypress/code-coverage/task')(on, config);

  return config;
};
