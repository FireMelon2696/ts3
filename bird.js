class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.7,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 25,  options);
      this.width = 25;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0,0, this.width, this.height);
      pop();
    }
  };
  