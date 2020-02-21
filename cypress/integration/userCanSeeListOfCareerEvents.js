describe('user can see list of career events',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#career-tab').click();
    })

    it('displays first career event', () => {
        cy.get('#career-1').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.header').should('contain', 'Graduating Rudbeckianska Gymnasiet');
            cy.get('.date').should('contain', 'Samhällsprogrammet, inriktning entreprenörsskap.');
            cy.get('.extra.content').should('contain', '2016-06-10');
            cy.get('.career.web').should('contain', 'www.skola.vasteras.se/gymnasieskolor/rudbeckianska.html')

        })
    })
})