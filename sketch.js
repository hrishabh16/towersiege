const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot1;
var polygon_img;

function preload(){
 
}


function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
   //level one
   block1 = new Block(300,275,30,40);
   console.log(block1);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);
 
   b1 = new Block(650,175,30,40);
   b2 = new Block(680,175,30,40);
   b3 = new Block(710,175,30,40);
   b4 = new Block(740,175,30,40);
   b5 = new Block(770,175,30,40);
 
   b6 = new Block(740,135,30,40);
   b7 = new Block(680,135,30,40);
   b8 = new Block(710,135,30,40);
   
   b9 = new Block(710,95,30,40)
 

  //ball  with slings
  ball = Bodies.circle(50,200,20);
  goal = Bodies.rectangle(890,200,20,200)
  World.add(world,ball);

  slingShot1 = new slingshot(this.ball,{x:200,y:200});

}

function draw() {
   
 background("violet")
  Engine.update(engine);
 
  
  ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("blue")
  block1.display();
  stroke(15);
  fill("purple")
  block2.display();
  block3.display();
  block8.display();
  stroke(15)
  fill("red")
  
  block4.display();
  block5.display();
  block9.display();
  block10.display();
  block13.display();
  stroke(15)
  fill("yellow")

  block14.display();
  
  block6.display();
  block7.display();
  
  block11.display();
  block12.display();
 
  block15.display();
  block16.display();
 

  stroke(15)
  fill("green")
  b1.display();
  stroke(15)
  fill("blue")
  b2.display();
  b3.display();
  b7.display();
  
  stroke(15)
  fill("purple")
  b4.display();
  b6.display();
  b5.display();
  b8.display();
  
  b9.display();

  stroke(15)
  fill("grey")
  
  text("drag and release to hit the boxes",100,100)

  
  fill("RED")
  rectMode(CENTER)
  rect(goal.position.x,ball.position.y, 30,800);
  
  fill("green")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  slingShot1.display();




  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot1.fly();
}

