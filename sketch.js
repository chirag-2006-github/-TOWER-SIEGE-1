const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Constraint=Matter.Constraint;
function preload(){
    ballImage=loadImage("polygon.png");
}


function setup(){
    engine= Engine.create();
    world=engine.world;
    

    createCanvas(600,600);

    ball=Bodies.circle(50,350,30);
    World.add(world,ball);
base= new ground(300,580,600,20);
ground1= new ground(350,450,200,10);
ground2= new ground(500,200,200,10);
box1=new Box(360,415);
box2=new Box(380,415);
box3=new Box(400,415);

box11=new Box(450,170)
box12=new Box(470,170)
box13=new Box(490,170)
sling=new SlingShot(ball,{x:50,y:200})
}
function draw(){
    background("red")

    base.display();
    ground1.display();
    ground2.display();
box1.display();
box2.display();
box3.display();
box11.display();
box12.display();
box13.display();

sling.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y, 30,30)
}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
}