const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ball;
var ground;
var roundthing;

function preload()
{
	groundImg = loadImage("ground2.png");

}

function setup() {



	createCanvas(800, 800);
	ground = createSprite(750,500,10,10);

ground.addImage(groundImg);

ball = createSprite(200,200,40,40);

engine = Engine.create();
world = engine.world;

roundthing = Bodies.circle(500,300,50);
World.add(world,roundthing);


}



function draw() {
	background("white");
ground.velocityX = -10;

 for (var b = 50;b < 800; b=b+10){
    text("Hello",50,b);
 }

if(ground.x <0){

	ground.x = ground.width/2;
}

text("Bryce",400,400);

ball.velocityX = 20;
ball.shapeColor = "red";

Engine.update(engine);

ellipse(roundthing.position.x,roundthing.position.y,50,50);

 drawSprites();
}



