var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg2);
    fill('black');
    textSize(40);
    text('TREASURE UNLOCKED!!',250,200);
  }
  else{
    // Add code to display score in the middle of the screen
    textSize(40);
    noFill();
    stroke('gold');
    text("Score:"+score,425,70);
  }

  drawSprites()

}