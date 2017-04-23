
var t  = 0;
var img;
var ship = [];
var food = [];
var atribute = [];

function preload(){
 img = loadImage("Images/ship.png");

}

function setup(){
  var canvas = createCanvas(1290, 600);
  canvas.parent('canvascontainer');

  for(var i = 0; i < 100;i++){
    food[i] = [];
    food[i][0] = createVector(random(width),random(height));
    food[i][1] = random(1) > 0.5 ? 1 : 0;

  }

  for(var i = 0; i < 50;i++){

    ship[i] = new Ship(width/2,height/2);

  }


}
function draw(){
    background(0);



    for(var i = food.length - 1; i>=0;i--){

      food[i][1] == 1 ? fill(0,255,0):fill(255,0,0);
      ellipse(food[i][0].x, food[i][0].y, 6, 6);

    }
    for(var i = 49; i>=0;i--){
        ship[i].run();
        var mouse = createVector(random(width),random(height));
        var force = ship[i].seek(mouse);
        ship[i].applyForce(force);
        ship[i].display();
      }
}

function mouseDragged() {

  }
