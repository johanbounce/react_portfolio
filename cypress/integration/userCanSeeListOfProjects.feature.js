describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#projects-tab').click();
    })
  
    it('displays first project', () => {
      cy.get('#project-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'ATM Challenge');
        cy.get('.description').should('contain', 'Creating a virtual ATM-Machine.');
        cy.get('.project.web').should('contain', 'www.github.com/johanbounce/ATM_challenge_2020')
      })
    });
  
    it('displays second project', () => {
      cy.get('#project-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Library Challenge');
        cy.get('.description').should('contain', 'Creating an application with basic library-functinality');
      })
    });
  
    it('displays third project', () => {
      cy.get('#project-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Legacy Code Challenge');
        cy.get('.description').should('contain', 'First interaction with Rails. Creating test for a messaging-application');
      })
    });  
  });