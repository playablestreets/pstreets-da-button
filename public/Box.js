class Box{
  constructor(x, y, z){
    this.x =  x;
    this.y =  y;
    this.z =  z;
    this.scale = 1;
    this.rotate = [0,0,0];


  }


  drawBox(){

    // color1 = new p5.Color();
    // color1.setRed(255);
    // color1.setGreen(0);
    // color1.setBlue(255);
    // color1.setAlpha(100);
    
    // color2 = new p5.Color();
    // color2.setRed(0);
    // color2.setGreen(255);
    // color2.setBlue(255);
    // color2.setAlpha(100);


    strokeWeight(10);
    // lineWidth(10);
    stroke(255);

    push();
    translate(this.x,this.y,this.z);
    rotateX(frameCount * 0.006 + this.rotate[0]);
    rotateZ( frameCount * -0.001 + this.rotate[1]);
    rotateY((frameCount * -this.rotate[2]) * 0.001);
    scale(this.scale);
    

    //front (1)
    push();
    translate(0, 0, -boxSize/2);
    // fill(color1);
    fill(255,255,0);
    plane(100);
    pop();

    //back(2)
    push();
    rotateY(radians(90));
    translate(0, 0, boxSize/2);
    // fill(color2);
    fill(255,0,255);
    plane(100);
    pop();

    //back(3)
    push();
    translate(0, 0, boxSize/2);
    // fill(color1);
    fill(0,255,255);
    plane(100);
    pop();

    //back(4)
    push();
    rotateY(radians(-90));
    translate(0, 0, boxSize/2);
    // fill(color2);
    fill(255,255,0);
    plane(100);
    pop();
    
    //back(4)
    push();
    rotateY(radians(-90));
    translate(0, 0, boxSize/2);
    // fill(color1); 
    fill(255,0,255);
    plane(100);
    pop();

    //back(5)
    push();
    rotateX(radians(-90));
    translate(0, 0, boxSize/2);
    // fill(color2);
    fill(0,255,255);
    plane(100);
    pop();

    //back(6)
    push();
    rotateX(radians(90));
    translate(0, 0, boxSize/2);
    // fill(color1);
    fill(255,255,0);
    plane(100);
    pop();


    pop();
  }
}