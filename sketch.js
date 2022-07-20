// professora nao estou conseguindo passar disso 
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

	//Crie os Corpos aqui.
	

    plane = Bodies.rectangle(400,700,800,10,plane_options)
    block1 = bodies.rectangle(200,500,100,30,block1_options)
    block2 = bodies.rectangle(600,500,100,30,block2_options)

    var plane_options={
    isStatic:true
  }	
  
	Engine.run(engine);
  
 }


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("green");
  
  Matter.Body.rotate(rotator1,angle1)
  Push()
  translate(rotator1.position.x,rotator1.position.y)
  rotate(angle1);
  rect(0,0,150,20)
  pop()
  angle1 +=0.2;

  drawSprites();
 

}



