class Box{
  constructor(x, y){
    var options={
      restitution:0.1,
      density:1.2,
      friction:1.5,
    }
    this.visibility=255;
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    World.add(world,this.body)
  }
  display(){
    console.log(this.body.speed);
    
    if(this.body.speed < 3){
    var angle = this.body.angle;
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop()
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility = this.visibility -5
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.pos.y,50,50)
      pop()
    }

  }
}