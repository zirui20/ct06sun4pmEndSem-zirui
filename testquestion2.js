let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];

function setup() {
    createCanvas(200,300);
}
function draw() {
    background("white");

    fill('pink');
    textAllign(CENTER,CENTER);
    textSize(20);

    for(let i=6; i<pokemons.length; i++ ) {
         text(pokemons[i], width/2, 100 + i*50);
    }

}
