/**
 * Este arquivo é executado antes de cada teste
 * feito pelo cypress.
 *
 * @see {https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Support-file}
 */
import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';
import './commands';
