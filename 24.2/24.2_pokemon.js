function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function(attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};

const pikachu = new Pokemon('Pikachu', 'Electric', ['Thunder Shock', 'Thunderbolt']);
const charmander = new Pokemon('Charmander', 'Fire', ['Ember', 'Flamethrower']);
const squirtle = new Pokemon('Squirtle', 'Water', ['Water Gun', 'Hydro Pump']);

pikachu.callPokemon(); 
pikachu.attack(0);    

charmander.callPokemon();
charmander.attack(1);

squirtle.callPokemon();
squirtle.attack(0);
