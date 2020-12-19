var moving,fixed;
var a,b;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.velocityX=4;
  moving=createSprite(600,200,50,50);
  moving.velocityX=-4;
  moving.shapeColor="green";
  a=createSprite(700,350,50,50);
  b=createSprite(400,350,50,50);
  b.velocityX=4;

}


function draw() {
  background(0);  
 // moving.x=World.mouseX;
 // moving.y=World.mouseY;
console.log(moving.x-fixed.x);
if(moving.x-fixed.x<fixed.width/2+moving.width+2 && 
  fixed.x-moving.x<fixed.width/2+moving.width+2 ){
 // moving.y-fixed.y<fixed.height/2+moving.height+2 && 
  //fixed.y-moving.y<fixed.height/2+moving.height+2){
  moving.shapeColor="yellow";
  fixed.shapeColor="red";
      moving.velocityX=moving.velocityX*(-1);  
      fixed.velocityX=fixed.velocityX*(-1);
}
else{
  moving.shapeColor="green";
  fixed.shapeColor="blue"; 
}

  drawSprites();
}