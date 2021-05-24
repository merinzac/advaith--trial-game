var bob, hiimage,alienYellowWalkImage;

function preload(){
  hiimage = loadImage("BobSaysHi.png")
  alienYellowWalkImage = loadAnimation("alienYellow_walk_1_1.png","alienYellow_walk_1_2.png");
  
  
}

function setup() {
  createCanvas(800,400);
  bob=createSprite(68,336);
  bob.scale=0.8
  bob.addImage(hiimage);
  bob.x=58
  bob.y=80
  guard = createSprite(202,70,50,50);
  guard.addAnimation( "alien", alienYellowWalkImage);
}


function draw() {
  background(0);  
  drawSprites();
}
  