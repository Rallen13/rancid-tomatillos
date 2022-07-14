import allMoviesData from '../fixtures/all-movies-data.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display all movies when the page has loaded', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
    cy.get('.movieCard').should('have.length', 40)
  })

  it('should display the proper info in a movie stub', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
    cy.get('.movieCard').contains('Money Plane')
    .get('.detail-date-rating').contains('2020').contains('6.9')
  })

})


//I can click on a movie to change the URL


//I can click a movie and see that movie's details

//Should see a 500 error when the server hecks it.

  // it('should display an error to the user when the server returns a 500 error', () => {
  //   cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',
  //   {
  //     statusCode: 500,
  //     body: { 
  //       message: `Email and password do not match.  Please try again.` 
  //     }
  //   })
  //   cy.get('.movieCard').should('have.length', 40)
  // })