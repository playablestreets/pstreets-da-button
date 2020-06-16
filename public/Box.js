class Box{
  constructor(x, y, z){
    this.x =  x;
    this.y =  y;
    this.z =  z;
    this.scale = 2;
    this.rotate = [0,0,0];
  }

  drawBox(){

    strokeWeight(10);
    stroke(255);

    push();
    translate(this.x,this.y,this.z);
    rotateX(frameCount * 0.005 + this.rotate[0]);
    rotateY(frameCount * 0.005 + this.rotate[1]);
    scale(this.scale);
    
    //front (1)
    push();
    translate(0, 0, -boxSize/2);
    fill(255, 255, 0);
    plane(100);
    pop();

    //back(2)
    push();
    rotateY(radians(90));
    translate(0, 0, boxSize/2);
    fill(0, 255, 255);
    plane(100);
    pop();

    //back(3)
    push();
    translate(0, 0, boxSize/2);
    fill(255, 0, 255);
    plane(100);
    pop();

    //back(4)
    push();
    rotateY(radians(-90));
    translate(0, 0, boxSize/2);
    fill(255, 255, 0);
    plane(100);
    pop();
    
    //back(4)
    push();
    rotateY(radians(-90));
    translate(0, 0, boxSize/2);
    fill(255, 255, 0);
    plane(100);
    pop();

    //back(5)
    push();
    rotateX(radians(-90));
    translate(0, 0, boxSize/2);
    fill(255, 0, 255);
    plane(100);
    pop();

    //back(6)
    push();
    rotateX(radians(90));
    translate(0, 0, boxSize/2);
    fill(0, 255, 255);
    plane(100);
    pop();


    pop();
  }
}