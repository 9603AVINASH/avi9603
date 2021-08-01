
function setup() {
  createCanvas(400,400);
  box=createSprite(350,350,90,90);
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+2;
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-2;
  }
  drawSprites();
  }



