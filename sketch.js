const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(200,300,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600,110,60,60);
  box2 = new Box(600,90,60,60);
  box3 = new Box(600,80,60,60);
  box4 = new Box(600,100,60,60);
  box5 = new Box(600,80,60,60);
  
  box6 = new Box(670,90,60,60);
  box7 = new Box(670,100,60,60);
  box8 = new Box(670,110,60,60);
  box9 = new Box(670,120,60,60);
  box10 = new Box(670,100,60,60);
  box11 = new Box(670,90,60,60);

  box12 = new Box(740,80,60,60);
  box13 = new Box(740,120,60,60);
  box14 = new Box(740,100,60,60);
  box15 = new Box(740,90,60,60);

  box16 = new Box(810,80,60,60);
  box17 = new Box(810,100,60,60);
  box18 = new Box(810,90,60,60);
  box19 = new Box(810,80,60,60);
  box20 = new Box(810,100,60,60);
  box21 = new Box(810,80,60,60);
  box22 = new Box(810,100,60,60);

  

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
}
