var tutorialMap, tutorial, playerImage, player, W, A, S, D, WE, AE, DE;
var gameState = "tutorialState";
var textState = 1;

function preload() {

  tutorialMap = loadImage("Tutorial.png");
  
  playerImage = createImg("amg1_fr2.gif");
  W = createImg("W.gif");
  A = createImg("A.gif");
  S = createImg("S.gif");
  D = createImg("D.gif");

  WE = createImg("amg1_bk2.gif");
  AE = createImg("amg1_lf2.gif");
  DE = createImg("amg1_rt2.gif");

}

function setup() {

  createCanvas(400, 400);

  tutorial = createSprite(200, 200, 400, 400);
  tutorial.addImage("cross_buns", tutorialMap);

  player = createSprite(200, 200, 50, 50);
  player.addImage("hot_dogs", playerImage);

}

function draw() {

  background("white");

  if(keyDown("W")) {
    player.y = player.y-25
    player.addAnimation("pikachu", W);
  }

  if(keyWentUp("W")) {
    player.addImage("salamance", WE);
  }

  if(keyDown("A")) {
    player.x = player.x-25
    player.addAnimation("pichu", A);
  }

  if(keyWentUp("A")) {
    player.addImage("raichu", AE);
  }

  if(keyDown("S")) {
    player.y = player.y+25
    player.addAnimation("hi", S);
  }

  if(keyWentUp("S")) {
    player.addImage("bye", SE);
  }

  if(keyDown("D")) {
    player.x = player.x+25
    player.addAnimation("die", D);
  }

  if(keyWentUp("D")) {
    player.addImage("live", DE);
  }

  drawSprites();

  textSize(25);
  fill("red");

  if(gameState === "tutorialState" && textState === 1) {
    text("Hi! Press Enter to keep reading.", 75, 300);
    textState = 2;
  } 

}