class Box{
    constructor(x,y){
        var options={density:0.8,
            friction:0.8,
            restitution:0.3}
            this.body= Bodies.rectangle(x,y,20,50,options)
                World.add(world,this.body)
    }

    display(){
        push()
        fill (0,random(0,255),0)
        rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,20,50);
   pop () 
    
    }
}