class Hero {
    constructor(x,y,r)
      {
          var options = { 
        density: 1, 
        frictionAir: 1
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("sprites/Superhero-01.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
  
              var superPos=this.body.position;		
              push()
              translate(superPos.x, superPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r+130, this.r)
              pop()
  
      }
  }