let opacitySlider;
let sliderR, sliderG, sliderB;


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("myContainer");
   background(0);
  // opacitySlider = document.getElementById('opacity')
  opacitySlider = document.getElementById("opacity");
  sliderR = document.getElementById("slider-r");
  sliderG = document.getElementById("slider-g");
  sliderB = document.getElementById("slider-b");

}



function draw() {
  let bgR = sliderR.value;
  let bgG = sliderG.value;
  let bgB = sliderB.value;
  background(bgR, bgG, bgB);
  //background(220);
  let opacity = int(opacitySlider.value);
  fill(255, 0, 0, opacity);
  ellipse(width/2, height/2, 100);
}
