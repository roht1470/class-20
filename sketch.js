var fixedRect,movingRect;

function setup() {    
  createCanvas(1200,800);
  fixedRect =createSprite(200, 200, 50, 80);
  movingRect=createSprite(400,200,80,50);
  fixedRect.shapeColor="GREEN";
  movingRect.shapeColor="GREEN";
  
}

function draw() {
  background("BLUE");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
 // console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x<fixedRect.width/2 + movingRect.width/2
    
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2) {
    movingRect.shapeColor="RED";
    fixedRect.shapeColor="RED";
   
  }
  else{
    movingRect.shapeColor="GREEN";
    fixedRect.shapeColor="GREEN";
  }
 
  drawSprites();
}