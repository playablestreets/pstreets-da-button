const boxSize = 100;
const box = new Box(0,0,0);
const box2 = new Box(0,0,0);
box2.rotate = [45, 83,  297];


var players = [];
var currentStep = 0;
var numSteps = 6
var bank = 0;
var numBanks = 8;
var bankLengths = [176, 91, 16, 31, 12, 161, 11, 16];
 
var startTime = new Date();
var lastTouched = getElapsed();

function getElapsed() {
  let endTime = new Date();
  return timeDiff = endTime - startTime; //in ms
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function loadBank(){

  numSteps = bankLengths[bank];
  
  console.log(numSteps);

  for(var i = 1; i <= numSteps; i++){
    let fileString = "../assets/" + (bank + 1) +"/00" + i + ".mp3";
    // let player = new Tone.Player(fileString);

		let player = new Tone.Player({
      "url" : fileString,
      "fadeOut": 2,
      "volume": -6

			// "loop" : true,
			// "loopStart" : 0.5,
			// "loopEnd" : 0.7,
		}).toMaster();

    //TODO this isn't sticking
    // player.volume = -12;
    player.toMaster();
    players.push(player);
    // mp3Locations.push("../assets/1/00" + i + ".mp3")
  }
}


function setup(){
  loadBank();

  console.log('hi');
 
  // Create the canvas
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style('z-index', -1);

  windowResized();
  // blendMode(SCREEN);
}

function draw(){
  box.scale = (getElapsed() - lastTouched) * 0.1 +  10;
  box2.scale = (getElapsed() - lastTouched) * 0.1 +  10;


  clear();
  //change visualisation in response to bank
  box.drawBox();
  box2.drawBox();
}

function step(){
  currentStep++;
  if(currentStep >= numSteps){
    currentStep = 1;
  }
  
  // players[currentStep].volume = -12; 
  players[currentStep].start();

}

function stop(){
  // players[currentStep].fadeOut = 1; 
  players[currentStep].stop();
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


function mousePressed() {

  lastTouched = getElapsed();

  console.log("touched " + lastTouched);

  step();
}

function mouseReleased() {
  console.log("released");
  stop();
}


// document.getElementById('playbutton').onclick = step;
// document.getElementById('playbutton').onmousedown = step;
document.getElementById('nextButton').onmousedown = bankNext;
// document.getElementById('bg').onmousedown = bgTouch;
// document.getElementById('bg').onmouseup = bgTouchUp;