class Box{
  constructor(x, y, z){
    this.x =  x;
    this.y =  y;
    this.z =  z;
  }

  drawBox(){
    push();
    translate(this.x,this.y,this.z);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    
    //front (1)
    push();
    translate(0, 0, -boxSize/2);
    fill(255, 0, 0);
    plane(100);
    pop();

    //back(2)
    push();
    rotateY(radians(90));
    translate(0, 0, boxSize/2);
    fill(0, 255, 0);
    plane(100);
    pop();

    //back(3)
    push();
    translate(0, 0, boxSize/2);
    fill(0, 0, 255);
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