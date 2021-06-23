class Girl{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,
            isStatic:false  
        }
        this.girl = Bodies.rectangle(x,y,180,180,options)
        this.radius = 5;
        this.image=loadImage("girl2.png");
        World.add(world, this.girl);
    }

  
     display(){
        fill("blue")
        imageMode(CENTER);
        image(this.image,this.girl.position.x,this.girl.position.y,180,180);
    }
}