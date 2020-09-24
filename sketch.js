
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,200,20);
	bob2 = new Bob(190,200.20);
	bob3 = new Bob(180,200,20);
	bob4 = new Bob(210,200,20);
	bob5 = new Bob(220,200,20);

	rope1=new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope2=new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope3=new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope4=new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope5=new Rope(bob1.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

  drawSprites();

}

 function keyPressed(){
	  if (keyCode === UP_ARROW) { 
		  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
		 } 
}