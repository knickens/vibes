var kiRed = 50;
var kiBlue = 100;
var kiGreen = 50;

function setup(){
    createCanvas(900,900);
    background(255);
   
}

function draw(){
    move();
     kiRed = random(0,255);
    kiBlue = random(0,255);
    kiGreen = random(0,255);
}

function move(){
    if(mouseIsPressed){
        fill(kiBlue,kiGreen,kiRed);
    ellipse(random(0,900),random(0,900),random(0,100),random(0,100));   
    rect(random(0,900),random(0,900),random(0,100),random(0,100));
    stroke(255);
    }
}