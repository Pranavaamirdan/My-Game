var bot,botImage,pipe,pipeImage,cloud,cloudImage;

function preload(){
botImage = loadAnimation("FLY_BOT_1.png","FLY_BOT_1.png"); 
pipeImage = loadAnimation("PIPE.png");
cloudImage = loadAnimation("CLOUD.png");
}

function setup() {
  createCanvas(400, 800);
  bot = createSprite(50,200,10,10);
  bot.addAnimation(botImage);
  pipe = createSprite(400,50,10,10);
  
}

function draw() {
  background("blue");
  drawSprite();
}