let img;
let circleImg;

function preload(){
  //async
  img = loadImage("asset/colorful.jpg");
  circleImg = loadImage("asset/sprite.png");
}


function setup() {
  createCanvas(400, 400);
  background(200,100,230);

}


function keyPressed(){
  if key=
}




function draw() {
  // background(220);

  //tint(150,0,100,50);//take out some color
  push();
  blendMode(ADD)
  tint(255,160,10,30);
  imageMode(CENTER);
  //image(img,mouseX,mouseY,200,150);
  image(circleImg,mouseX,mouseY,70,70)
  //filter(BLUR,6);
  //filter(GRAY);
  pop();
}
