
let x=0;
let g=0;

function addDiv(){
  //create a HTML element!!!!!!!!
  //change properties

  //???what is document???
  //an element is <something> in HTML
  let newEelt=document.createElement("div");
  newEelt.style.backgroundColor="blue";
  newEelt.style.width="50px";
  newEelt.style.height="50px";
  newEelt.style.margin="30px";
  // newEelt.style.position="absolute";
  // newEelt.style.right="100px";
  // newEelt.style.top="100px";
  //attach to document
  //document.body.appendChild(newEelt);
  document.getElementById('box').appendChild(newEelt);
}


function change(){
  //alert("hi");
  x+=20;
  g+=10;
  let b = document.getElementById('box');
  console.log(b);
  b.innerHTML="wow!";//???????
  //b.style.left=x+"px";//?????????
  b.style.height = "300px";
  b.style.backgroundColor="rgb(255,"+g+",0)";//C use camelCase
}
