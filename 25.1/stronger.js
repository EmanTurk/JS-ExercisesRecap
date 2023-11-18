const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }
    }
    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    } else return "You are stronger";
    }
    whoIsStronger(hero.getStrength);
    /// answer: what is the problem? whoIsStronger(hero.getStrength);- when this is called hero.gets.. is passed as a reference to the function but it loses its original context (this value) of the hero object- so use bind to bind hero.getStrenth to the hero object!!

    const hero = {
        health: 5,
        power: 68,
        getStrength: function() {
            if (this.health <= 5) {
                return this.power - 10;
            } else {
                return this.power;
            }
        }
    };
    
    function whoIsStronger(getStrength) {
        const myStrength = 82;
        if (getStrength() < myStrength) {
            return "I am stronger";
        } else {
            return "You are stronger";
        }
    }
    
    const boundGetStrength = hero.getStrength.bind(hero);
    console.log(whoIsStronger(boundGetStrength));
    