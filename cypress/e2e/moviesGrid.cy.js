import allMoviesData from '../fixtures/all-movies-data.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  describe('Main Page Render', () => {
    it('should display all movies when the page has loaded', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
      cy.get('.movieCard').should('have.length', 40)
    })
  
    it('should display the proper info in a movie stub', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
      cy.get('.movieCard').contains('Money Plane')
      .get('.detail-date-rating').contains('2020').contains('6.9')
    })
  });

  describe('Swapping to Movie Details', () => {
    it('should change the url', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
      cy.get('.movieCard').click()
      
    })
  
    it('should show the movie details', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
      cy.get('.movieCard').contains('Money Plane')
      .get('.detail-date-rating').contains('2020').contains('6.9')
    })
  });
  
  describe('500 Error testing', () => {
    before(() => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404,
      })
      })
    it('should display an error to the user when the server returns a 500 error', () => {
        cy.get('.error-page').should('exist')
    })
  })
})








//I can click on a movie to change the URL


//I can click a movie and see that movie's details

 