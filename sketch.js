var movingrect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  movingrect = createSprite(800, 400, 200, 100);
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);

  movingrect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
   
}

function draw() {
  background(255,255,255);  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(isTouching(movingrect, gameObject1)) {
    movingrect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  } else {
    movingrect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1, object2) {
  if(object1.x - object2.x === object1.width/2 + object2.width/2
    || object2.x - object1.x === object1.width/2 + object2.width/2 
    || object2.y - object1.y === object1.height/2 + object2.height/2 
    || object1.y - object2.y === object1.height/2 + object2.height/2){
      return true;
 } else {
     return false;
 }
}