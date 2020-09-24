class Bob {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.6,
          'density':1.2,
          'isStatic':false
      } 
     
      this.x = x;
      this.y = y;
      this.r = r;
     
      this.Body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      World.add(world, this.body);
   }
    display(){
      var BobPos =this.body.position;
    
      push();
      translate(BobPos.x, BobPos.y);
      ellipseMode(CENTER);
     strokeWeight(4);
      fill(255);
      ellipse(50, 100, this.r, this.r);
      pop();
    }
  };
  