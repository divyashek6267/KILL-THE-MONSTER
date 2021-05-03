const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,sling1,ground;

function preload() {
  bg = loadImage("sprites/GamingBackground.png.jpg");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(300,403,250);
  rope = new Slingshot(hero.body, { x: 400, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(550, 100, 60, 60);
  box2 = new Box(550, 140, 60, 60);
  box3 = new Box(550, 200, 60, 60);
  box4 = new Box(550, 290, 60, 60);
  box5 = new Box(550, 350, 60 ,60);
  box6 = new Box(550, 400, 60, 60);
  box7 = new Box(550, 450, 60, 60);

  box8 = new Box(640, 100, 60, 60);
  box9 = new Box(640, 150, 60, 60);
  box10 = new Box(640, 200, 60, 60);
  box11 = new Box(640, 230, 60, 60);
  box12 = new Box(640, 240, 60, 60);
  box13 = new Box(640, 240, 60, 60);

  box14 = new Box(730, 100, 60, 60);
  box15 = new Box(730, 150, 60, 60);
  box16 = new Box(730, 200, 60, 60);
  box17 = new Box(730, 240, 60, 60);
  box18 = new Box(730, 280, 60, 60);
  box19 = new Box(730, 310, 60, 60);
  box20 = new Box(730, 350, 60, 60); 
  box21 = new Box(730, 400, 60, 60);

  box22 = new Box(820, 100, 60, 60);
  box23 = new Box(820, 150, 60, 60);
  box24 = new Box(820, 200, 60, 60);
  box25 = new Box(820, 230, 60, 60);
  box26 = new Box(820, 250, 60, 60);
}

function draw() {
  background(bg);
  Engine.update(engine);



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
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    ground.display();
    rope.display();
    hero.display();
    monster.display();
  }

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}