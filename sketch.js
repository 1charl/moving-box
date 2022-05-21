//declaring variables
var box;

//to create things, runs once
function setup() {
  createCanvas(400,400);

  //creating box sprite
  box=createSprite(200,200,20,20)

}

//do things continuously
function draw()
{
  background("blue");
  if (keyIsDown(LEFT_ARROW)){
    box.x-=4;
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.x+=4;
  }
  if (keyIsDown(UP_ARROW)){
    box.y-=4;
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y+=4;
  }

  drawSprites();
}




