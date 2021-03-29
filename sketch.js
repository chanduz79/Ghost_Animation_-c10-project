var ghost, ghost_moving;

function preload() {
  ghost_moving=loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
  createCanvas(600,600);
  ghost = createSprite(300,300,50,50);
  ghost.addAnimation("ghost",ghost_moving);
  
}

function draw(){
  background("black");
  drawSprites();
}