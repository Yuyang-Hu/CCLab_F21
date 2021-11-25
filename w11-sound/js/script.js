let sound;
let song;
let amp;


function preload(){
  //load sound, img,text in advance
  sound=loadSound("assets/beat.mp3");
  song=loadSound("assets/song.mp3");
}

function setup() {
  //auto play
  frameRate(360);
  let canvas = createCanvas(400, 400);
  canvas.mousePressed(userStartAudio); //***

  //amp=new p5.Amplitude();
  mic=new p5.AudioIn();
  mic.start();
  background(220);
}

function draw() {
  background(0,10);


  let volume=mic.getLevel();
  console.log(floor(volume*100));

  let dia=map(volume,0,1,10,500);//0,1 is %
  noStroke();
  fill("pink");
  ellipse(width/2,height/2,dia,dia);


  // let vol=map(mouseY,0,height,1.00,0.00,true);
  // //"true" means that u limit the value between the 2 range values
  // //song.setVolume(vol);//&?????
  // let panning=map(mouseX,0,width,-1.00,1.00,true);
  // //song.pan(panning);
}

function keyPressed(){
  if (key=="p"){
    if (song.isPlaying()==false){
      song.play();
    }
  }else if (key=="s"){
    song.stop();
  }
}


// function mouseDragged(){
//   // if(sound.isPlaying()){
//   //   //do nothing
//   // }else{
//   //   sound.play();
//   // }
//   //same as:
//   if (!song.isPlaying()){
//     song.play();
//   }
//
//
// }
