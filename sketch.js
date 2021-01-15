const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground1=new Ground(600,height,800,20);
  
}

function draw() {
  ground1.display();
  drawSprites();
}