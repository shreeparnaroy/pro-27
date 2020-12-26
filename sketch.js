
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//create the Bodies Here.
	
	bob1=new Bob(200,100,50)
	bob2=new Bob(250,100,50)
	bob3=new Bob(300,100,50)
	bob4=new Bob(350,100,50)
	bob5=new Bob(400,100,50)

    roof=new Ground(width/2,30,width,20)

	rope1=new Slingshot(bob1.body,{x:200,y:30})
	rope2=new Slingshot(bob2.body,{x:250,y:30})
	rope3=new Slingshot(bob3.body,{x:300,y:30})
	rope4=new Slingshot(bob4.body,{x:350,y:30})
	rope5=new Slingshot(bob5.body,{x:400,y:30})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()


roof.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(bob1.body,bob1.body.postion,{x:-85,y:-80})
	
	}
	
}	

