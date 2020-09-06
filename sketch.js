
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	bob1 = new Bob(200,200,20,20);
	bob2 = new Bob(190,200.20,20);
	bob3 = new Bob(180,200,20,20);
	bob4 = new Bob(210,200,20,20);
	bob5 = new Bob(220,200,20,20);

	rope1=new Rope(bob1.Body,roof.Body,bobDiameter*2,0);

	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyDown(){

	
}

