var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg=loadAnimation("fairyImage1.png","fairyImage2.png")
	fairyvoice=loadSound("Joymusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fairyvoice.play();
	fairy=createSprite(130,520)
	fairy.scale=0.2;
	fairy.addAnimation("flyingfairy",fairyImg)
	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y>470 && starBody.position.y > 470){
     Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

if(keyCode===RIGHT_ARROW){
	fairy.x=fairy.x+20;

}
if(keyCode === LEFT_ARROW){
	fairy.x=fairy.x-20;
}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	
}