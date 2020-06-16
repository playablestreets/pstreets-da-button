class Sparkle{
  constructor(x, y, z){
    this.x =  x;
    this.y =  y;
    this.z =  z;
    this.scale = 1;
    this.rotate = [0,0,0];
    this.points = [];
    for( var i = 0; i < 33; i++){
      let x = Math.random() * 2 - 1;
      let y = Math.random() * 2 - 1;
      let z = Math.random() * 2 - 1;
      this.points = [x, y, z]; 
    }

  }
  
  announce(){
    console.log( this );
  }


  draw(){
    // push();
    // translate(this.x,this.y,this.z);
    // rotateX(frameCount * 0.006 + this.rotate[0]);
    // rotateZ( frameCount * -0.001 + this.rotate[1]);
    // rotateY((frameCount * -this.rotate[2]) * 0.001);
    scale(this.scale);

    //front (1)
    // push();
    // translate(0, 0, -boxSize/2);
    stroke(200, 233, 255);
    fill(221,253,255);

    this.points.forEach(point=>{
      line(this.x, this.y, this.z, this.x + this.points[0] * this.scale, this.y + this.points[1] * this.scale, this.z + this.points[2] * this.scale);
    });


    // plane(100);
    // pop();
    // pop();
  }

}