var starImg, fairyImg, bgImg;
var fairy , fairyVoice, fairyCollect;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	starImg = loadImage("starImage.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starryNight.jpg");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.05;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	star.visible= true;
	fairy.visible= true;
	
  Engine.run(engine);
  keyPressed();

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  edges = createEdgeSprites();
    
    fairy.collide(edges);

  if(starBody.x > 460 && starBody.position.y > 470){
	isStatic=true;
	  Body.setStatic(starBody,isStatic);
  }

  console.log(starBody.position.x);
  drawSprites();

}

function keyPressed() {
	//write code here 
	
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-5;
	}
	if(keyCode===RIGHT_ARROW){
		fairy.velocityX=+5;
	}
	if(keyCode===DOWN_ARROW){	
		isStatic=false;
	Body.setStatic(starBody,isStatic);
	star.x = starBody.position.x;
    star.y = starBody.position.y;
	
	}

}

