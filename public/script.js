const boxSize = 100;
const box = new Box(0,0,0);

// var player = new Tone.Player({
//   "url" : "./audio/FWDL.[mp3|ogg]",
//   "loop" : true,
//   "loopStart" : 0.5,
//   "loopEnd" : 0.7,
// }).toMaster();

var players = [];
// var mp3Locations = [];
var currentStep = 0;
var numSteps = 176

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function setup(){
  
  for(var i = 1; i <= numSteps; i++){
    let player = new Tone.Player("../assets/1/00" + i + ".mp3");
    player.toMaster();
    players.push(player);
    // mp3Locations.push("../assets/1/00" + i + ".mp3")
  }
  // console.log(mp3Locations);
  // players = new Tone.Players(mp3Locations);
  // players.toMaster();

  console.log('hi');
  // Create the canvas
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', -1);

  // windowResized();
}

function draw(){
  clear();
  box.drawBox();
}

function step(){
  currentStep++;
  if(currentStep > numSteps){
    currentStep = 1;
  }
  players[currentStep].start();

}

// document.getElementById('playbutton').onclick = step;
document.getElementById('playbutton').onmousedown = step;