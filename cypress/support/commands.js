import singleMovieData from '../fixtures/single-movie-data.json';

const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

Cypress.Commands.add('stubSingleMovieData', () => {
  cy.intercept(`${baseURL}/694919`, singleMovieData)
    .visit('http://localhost:3000/694919')
});

Cypress.Commands.add('interceptSingleMovieData', () => {
  cy.intercept(`${baseURL}/694919`, singleMovieData)
});
