const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var drops=[], umbrella,maxDrops=100


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	if(frameCount%100===0){
		for(var i =0;i<maxDrops;i++){
			drops.push(new Drop(random(0, 600), random(0,600)))	}
	}
	umbrella= new Umbrella(390, 600)
	//Create the Bodies Here.
    


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	Engine.update(engine);
for(var i =0; i<maxDrops;i++){
	drops[i].display()
	drops[i].updateDrops()
}


  drawSprites();
 

  umbrella.display()

}



