let x = 300;
let xSpeed = 5;
let radius = 25;


function setup() {
    createCanvas(600,400);
}
function draw() {
    background('lightblue');
    noStroke();
    fill('limegreen');
    circle(x,200,50);

    if(x>=width-radius || x<=radius) {
        xSpeed *=-1;
    }


    x += xSpeed;
    circle(x,200,50);
}
