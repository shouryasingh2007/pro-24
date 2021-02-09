
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	bird = new Bird(100,100);
	stone = new  Stone(500,320,70,70);
	rubber = new Rubber(650,320,70,70);
    sand = new Sand(200,320,50,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine)

  ground.display();
  bird.display();
  stone.display();
  rubber.display();
  sand.display();
  
  
 
}



