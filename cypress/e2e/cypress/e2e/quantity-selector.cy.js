describe('Quantity Selector', () => {
  it('increments and decrements quantity', () => {
    // Visitar la página
    cy.visit('http://127.0.0.1:9292/');

    // Verificar que la cantidad inicial sea 1
    cy.get('#quantity').should('have.value', '1');

    // Incrementar la cantidad
    cy.get('#increment').click();
    cy.get('#quantity').should('have.value', '2');

    // Decrementar la cantidad
    cy.get('#decrement').click();
    cy.get('#quantity').should('have.value', '1');

    // Intentar decrementar por debajo de 1 (debería permanecer en 1)
    cy.get('#decrement').click();
    cy.get('#quantity').should('have.value', '1');
  });
});
