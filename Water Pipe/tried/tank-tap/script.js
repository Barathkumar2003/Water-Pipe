
var intervalId;
var isFlowing=false;
var flow = document.getElementById("waterFlow");
var newHeight;

function main() {

  if (isFlowing) {
    stopFlow();

  } else if(!isFlowing) {
    startFlow();
  }
}


function startFlow(){
  isFlowing=true;
  intervalId =setInterval(water ,50);

  
  if(newHeight === 0) {
    flow.style.visibility = "hidden";
  } else {
    flow.style.visibility = "visible";
  }
  console.log(newHeight);
}

function stopFlow(){
  isFlowing=false;
  flow.style.visibility = "hidden";
  clearInterval(intervalId);
}

function water(){

    var water=document.getElementById("water");
    var currentHeight = water.clientHeight;

    newHeight = Math.max(currentHeight - 1,0); // Decrease by 1 pixel


    water.style.height = newHeight + 'px';


    water.style.marginTop = (400  - newHeight)  + "px";
    

    if (newHeight === 0) {
      flow.style.visibility = "hidden";
      stopFlow();
    }

}
