describe("home switch", () => {
  it("is enabled by default ", () => {
    cy.goTo("pokedex")
      .get<HTMLInputElement>('[data-testid="caughtPokemonsSwitch"]')
      .should("be.checked");
  });

  it("should list all pokemons on uncheck", () => {
    cy.goTo("pokedex")
      .get<HTMLInputElement>('[data-testid="caughtPokemonsSwitch"]')
      .click()
      .get<NodeListOf<HTMLElement>>(
        '[data-testid="pokemonCard"]'
      )
      .not(':has([data-testid="caughtPokemon"])')
      .should('have.length.greaterThan', 0)
  });
});
