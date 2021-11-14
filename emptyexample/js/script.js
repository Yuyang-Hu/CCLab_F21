// let bgR=100;
// let bgG=100;
// let bgB=100;
let sliderBgR;
let sliderBgG;
let sliderBgB;

function setup(){
  createCanvas(400,400);
  sliderBgR=document.getElementById("bg-r");
  sliderBgR=document.getElementById("bg-g");
  sliderBgR=document.getElementById("bg-b");
}

function draw(){
  let r = sliderBgR.value;
  let g = sliderBgG.value;
  let b = sliderBgB.value;

  background(r,g,b);
}

function changeBackground(){
  let bgR=random(255);
  let bgG=random(255);
  let bgB=random(255);
  background(bgR,bgG,bgB);
}




























// console.log("loaded");
//
// let newBtn=document.createElement("button");
//
// newBtn.style.width="50px";
// newBtn.style.height="50px";
// newBtn.style.margin="10px";
// newBtn.addEventListener("click",function(){
//   let body=document.body;
//   let r = Math.floor(Math.random()*255);
//   let g = Math.floor(Math.random()*255);
//   let b = Math.floor(Math.random()*255);//0 to 0.999999 //p5 random()
//   body.style.backgroundColor="rgr("+r+","+g+","+b+")";
// });
// document.body.appendChild(newBtn);
//
// function change(){
//   //alert("works!");
//
// }

/*
for (let i=0;i<100;i++){
  let newDiv=document.createElement("div");
  newDive.style.backgroundColor="gray";
  newDive.style.width="100px";
  newDive.style.height="100px";
  newDive.style.margin="10px";
  document.body.appendChild(newDiv);
}
*/
