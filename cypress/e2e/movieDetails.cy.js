describe('Movie Details Page', () => {

  beforeEach(() => {
    cy.stubSingleMovieData()
  });

  describe('Movie Details Loading', () => {

    it('Should display a loading page while fetching movie data', () => {
      cy.get('.loading-container')
        .should('contain', 'Loading...')
        .should('be.visible')
    });

    it('Should remove loading message once movies have loaded', () => {
      cy.get('.loading-container').should('not.exist')
    });

  });

})
