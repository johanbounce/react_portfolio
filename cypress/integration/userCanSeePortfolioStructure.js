describe('Portfolio interface', () => {
    it ('succesfully rednders', () => {
        cy.visit('http://localhost:3000');
        cy.get('#header').should('contain', 'My Portfolio');
        cy.get('#footer').should('contain', 'Made with React 16.12.0');
        cy.get('#hello').should('contain', 'Hello World');
    })
})