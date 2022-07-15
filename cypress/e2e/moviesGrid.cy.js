import allMoviesData from '../fixtures/all-movies-data.json'

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  describe("Main Page Loading", () => {
    it("Should display a loading page while fetching movie data", () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData).visit('http://localhost:3000/')
      cy.get(".loading-container")
        .should("contain", "Loading...")
        .should("be.visible");
    });

    it("Should remove loading message once movies have loaded", () => {
      cy.get(".loading-container").should("not.exist");
    });
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
      cy.get('.movieCard:first').click()
      cy.url().should('include', '/694919')
    })
  
    it('should show the movie details after swapping views', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMoviesData)
      cy.get('.movieCard:first').click()
      cy.get(".detail-container")
        .should(
          "have.css",
          "background-image",
          'url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")'
        )
        .get(".detail-title")
        .contains("Money Plane")
        .get(".detail-date-rating")
        .contains("2020")
        .get(".detail-date-rating")
        .contains(6)
        .get(".detail-date-rating")
        .contains(82)
        .get(".genre-container")
        .contains("Action")
        .get(".detail-tagline")
        .eq("")
        .get(".detail-overview")
        .contains("A professional thief")
        .get(".detail-money")
        .contains("Budget: $0")
        .get(".detail-money")
        .contains("Revenue: $0");
    })
  });
  
  describe('500 Error testing', () => {
    before(() => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
      })
      })
    it('should display an error to the user when the server returns a 500 error', () => {
        cy.get('.error-page').should('exist')
    })
  })
})








//I can click on a movie to change the URL


//I can click a movie and see that movie's details

 