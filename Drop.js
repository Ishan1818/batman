class Drop
{
    constructor(x, y){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        
     

        }
     
        this.r=5;
        this.body=Bodies.circle(x, y, 5, options)
        World.add(world, this.body)
        
    }
    display(){
        var paperpos=this.body.position;
        fill("blue")
        ellipseMode(CENTER)
ellipse (paperpos.x, paperpos.y, this.r, this.r)
}
updateDrops(){
    if(this.body.position.y>height)       
        {
            Matter.Body.setPosition(this.body, {x:random(0, 600), y:(0, 700)})
        }
}


}