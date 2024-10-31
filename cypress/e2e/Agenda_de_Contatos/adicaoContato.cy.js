/// <reference types="cypress" />

describe('Teste para adicionar, editar e remover o contato', () => {
    beforeEach(() => {
        // Limpa o localStorage para resetar o estado da aplicação entre os testes
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.clearLocalStorage();

        // Aguarda e verifica se o botão de exclusão existe antes de tentar excluí-lo
        cy.get('body').then(($body) => {
            if ($body.find('.delete').length > 0) {
                cy.get('.delete').each(($el) => {
                    cy.wrap($el).click();
                });
            }
        });
    });

    it('Deve preencher as informações para adição de contato', () => {
        cy.get('[type="text"]').type('Luiz Henrique');
        cy.get('[type="email"]').type('Luiz980alves@gmail.com');
        cy.get('[type="tel"]').type('12 12345678');
        
        cy.screenshot('Adicionando-teste');
        
        cy.get('.adicionar').click();
    });

    it('Deve editar as informações do contato', () => {
        cy.get('.edit').last().click();
        cy.get('[type="text"]').clear().type('Luiz Henrique Alves Cardoso');
        cy.get('[type="email"]').clear().type('LuizInvestimentos980@gmail.com');
        cy.get('[type="tel"]').clear().type('12 87654321');
        
        cy.screenshot('Editando-teste');
        
        cy.get('.alterar').click();
    });

    it('Deve excluir o contato', () => {
        cy.get('.delete').last().click();
        
        cy.screenshot('Excluindo-teste');
    });
});
