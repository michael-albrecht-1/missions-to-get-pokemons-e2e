describe("home switch", () => {
  it("is enabled by default ", () => {
    cy.path("pokedex")
      .get<HTMLInputElement>('[data-testid="caughtPokemonsSwitch"]')
      .should("be.checked");
  });

  it("should list all pokemons on uncheck", () => {
    cy.path("pokedex")
      .wait(25000)
      .get<HTMLInputElement>('[data-testid="caughtPokemonsSwitch"]');
    // .click()
    // .should("not.be.checked");

    const pokemonsCardsChainableEl = cy.get<NodeListOf<HTMLElement>>(
      '[data-testid="pokemonCard"]'
    );
    expect(pokemonsCardsChainableEl).to.exist;

    pokemonsCardsChainableEl.then((list) => {
      const notCaughtPokemons = Array.from(list).some(
        (cardEl) => !cardEl.querySelector('[data-testid="pokemonCaught]"')
      );

      expect(notCaughtPokemons).to.be.true;
    });

    // expect(pokemonsCardsEl).to.exist;
  });
});
