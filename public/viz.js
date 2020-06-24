// class Viz{
//   constructor(x, y, z){
//     this.x =  x;
//     this.y =  y;
//     this.z =  z;
//     this.scale = 1;
//     this.rotate = [0,0,0];
//   }




// }

const boxSize = 100;
const box = new Box(0,0,0);
const box2 = new Box(0,0,0);

box.rotate = [120, 45,  45];
box2.rotate = [90, -45,  -45];



function nineteeneightyeight(){
  box.scale = (getElapsed() - lastTouched) / 20  + 100;
  box2.scale = (getElapsed() - lastTouched) / 30 + 100.1;
  // box2.scale = (getElapsed() - lastTouched + 1) * 0.12 ;

  // clear();
  // background('rgba(0,0,0, 0)');

  //change visualisation in response to bank
  box.drawBox();
  box2.drawBox();
  // sparkle.draw();
}


function drawViz(id){

  //switch visualisation here
  nineteeneightyeight();

}