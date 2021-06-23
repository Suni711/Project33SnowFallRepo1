const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg;
var snow=[];
var snow1img,snow2img;
var girlImg;
var girl;
function preload(){
  bgimg=loadImage("snow3.jpg");
  //snow1img=loadImage("snow4.webp");
  //snow2img=loadImage("snow5.webp");
  girlImg=loadImage("girl2.png");
}
function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  girl = new Girl(150,110);
  
  girl.scale=0.05;
      

  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,800), random(0,800)));
      
    }

  }
 

}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  for(var i = 0; i<200; i++){
        snow[i].showDrop();
        snow[i].updateY()
  }
  


  girl.display();
  drawSprites();

}


function keyPressed(){
 
   
  if( keyCode === 37){
 
   Matter.Body.setVelocity(girl.body, {x: -50 , y: 0});
 
 }


 else if(keyCode === 39){
   
   Matter.Body.setVelocity(girl.body, {x: 50 , y: 0});
 
 }


 else if(keyCode === 38){
   
   Matter.Body.setVelocity(girl.body, {x: 0 , y: -50});
 
 }

 else if(keyCode === 40){
  
   Matter.Body.setVelocity(girl.body, {x: 0 , y: 50});
 
 }

}
 

function mouseDragged()
  {
   Matter.Body.setPosition(girl.body, {x: mouseX , y: mouseY});
  }   


