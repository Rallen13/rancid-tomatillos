describe("Movie Details Page", () => {
  beforeEach(() => {
    cy.stubSingleMovieData();
  });

  describe("Movie Detail Loading", () => {
    it("Should display a loading page while fetching movie data", () => {
      cy.get(".loading-container")
        .should("contain", "Loading...")
        .should("be.visible");
    });

    it("Should remove loading message once movies have loaded", () => {
      cy.get(".loading-container").should("not.exist");
    });
  });

  describe("Movie Detail Display", () => {
    it("Should render all data for the movie detail display", () => {
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
    });
  });

  describe("Movie Details Navigation", () => {
    before(() => {
      cy.stubAllMovies()
      cy.get('.movieCard').should('have.length', 40)
    });

    it('Should go back to main page view when "X" button is clicked', () => {
      cy.get(".close-btn")
        .click()
        .url()
        .should("eq", "http://localhost:3000/")
        .get(".movies-container")
        .find(".movieCard")
        .should("have.length", 40);
    });

    it("Should be able refresh movie info display", () => {
      cy.interceptSingleMovieData()
        .reload()
        .get(".detail-title")
        .contains("Money Plane");
    });
  });
});
describe('500 Error testing', () => {
  before(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
      }).visit('http://localhost:3000/694919')
    })
  it('should display an error to the user when the server returns a 500 error', () => {
      cy.get('.error-page').should('exist')
  })
})