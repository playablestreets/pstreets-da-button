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
var numSteps = 6
var bank = 0;
var numBanks = 8;


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function loadBank(){
  for(var i = 1; i <= numSteps; i++){
    let fileString = "../assets/" + (bank + 1) +"/00" + i + ".mp3";
    let player = new Tone.Player(fileString);
    player.toMaster();
    players.push(player);
    // mp3Locations.push("../assets/1/00" + i + ".mp3")
  }
}


function setup(){
  loadBank();

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
  //change visualisation in response to bank
  box.drawBox();
}

function step(){
  currentStep++;
  if(currentStep >= numSteps){
    currentStep = 1;
  }
  players[currentStep].start();

}

function bankNext(){
  console.log('bank next');


  //for each in players
  //dispose
  players.forEach(player => player.dispose());

  //clear players
  players = [];

  //increment bank
  bank++;
  bank %= numBanks;

  console.log("bank " + bank);

  //load sounds
  loadBank();
}

// document.getElementById('playbutton').onclick = step;
document.getElementById('playbutton').onmousedown = step;
document.getElementById('nextButton').onmousedown = bankNext;