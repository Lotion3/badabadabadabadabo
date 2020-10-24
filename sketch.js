const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,b1,b2,b3,b4,bb1,bb2,bb3,bbb1,bbb2,bbbb1;
var backgroundImg,platform;
var ball, slingShot, score=0;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,300,300,20);
    platform = new Ground(150, 505, 300, 170);
    box1 = new Box(500,250);
    box2 = new Box(550,250);
    box3 = new Box(600,250);
    box4 = new Box(650,250);
    box5 = new Box(700,250);
    b1 = new Box(525,200);
    b2 = new Box(575,200);
    b3 = new Box(625,200);
    b4 = new Box(675,200);
    bb1 = new Box(550,150);
    bb2 = new Box(600,150);
    bb3 = new Box(650,150);
    bbb1 = new Box(575,100);
    bbb2 = new Box(625,100);
    bbbb1 = new Box(600,50);
    ball = new ob(100,100);



    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background("black");
    text("SCORE: "+score,750,40)
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
     box1.score();
    box2.display();
     box2.score();
    ground.display();
    box3.display();
     box3.score();
    box4.display();
     box4.score();
    box5.display();
     box5.score();
    b1.display();
     b1.score();
    b2.display();
     b2.score();
    b3.display();
     b3.score();
    b4.display();
     b4.score();
    bb1.display();
     bb1.score();
    bb2.display();
     bb2.score();
    bb3.display();
     bb3.score();
    bbb1.display();
     bbb1.score();
    bbb2.display();
     bbb2.score();
    bbbb1.display();
     bbbb1.score();
    ball.display();
    platform.display();
    slingshot.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball.body)
    }
}