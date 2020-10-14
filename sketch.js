const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1,box2,box3,box4,box5,ground;
var log1,log2,log3,log4;
var pig1,pig2;
var bird
var score=0;
var bg;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();
    stant1 = new Ground(690,500,250,10);
    stant2 = new Ground(1000,400,200,10)
    box1 = new Box(600,475,30,40);
    box2 = new Box(630,475,30,40);
    box3 = new Box(690,475,30,40);
    box4 = new Box(720,475,30,40);
    box5 = new Box(750,475,30,40);
    box6 = new Box(780,475,30,40);
    box7 = new Box(660,475,30,40);

    box8 = new Box(660,435,30,40);
    box9 = new Box(630,435,30,40);
    box10 = new Box(690,435,30,40);
    box11 = new Box(720,435,30,40);
    box12 = new Box(750,435,30,40);

    box13 = new Box(660,395,30,40);
    box14 = new Box(690,395,30,40);
    box15 = new Box(720,395,30,40);

    box16 = new Box(690,355,30,40);

    box17 = new Box(940,375,30,40);
    box18 = new Box(970,375,30,40);
    box19 = new Box(1000,375,30,40);
    box20 = new Box(1030,375,30,40);
    box21 = new Box(1060,375,30,40);

    box22 = new Box(970,335,30,40);
    box23 = new Box(1000,335,30,40);
    box24 = new Box(1030,335,30,40);

    box25 = new Box(1000,295,30,40);

    ground = new Ground(600,590,1200,20);

    bird = new Bird(200,300);
    sling = new SlingShot(bird.body,{x:200,y:300});
}

function draw(){
    if(bg){
        background(bg);
    }else{
        background("lightgreen");
    }
    
    Engine.update(engine);
    textSize(20);
    fill("white");

    text("score: "+score,width-300,50);
    stant1.display();
    stant2.display();
    fill ("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill ("white");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill ("purple");
    box13.display();
    box14.display();
    box15.display();
    fill ("yellow");
    box16.display();
    fill ("blue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill ("brown");
    box22.display();
    box23.display();
    box24.display();
    fill ("red");
    box25.display();
    sling.display();
    ground.display();
    bird.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{
        x:mouseX, y:mouseY
    })
}
function mouseReleased(){
    sling.fly();

}
function keyPressed(){
    sling.attach(bird.body);
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "lightblue";
    }
    else{
        bg = "darkgreen";
    }
}
