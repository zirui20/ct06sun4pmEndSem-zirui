let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];

function setup() {
    createCanvas(200,300);
}
function draw() {
    background("black");

    fill('pink');
    textAllign(CENTER,CENTER);
    textSize(20);

    for (let i=0; i<arr.length; i++) {
        text(arr[i], width/2, 100 + i*50);
    }
}
