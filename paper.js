class Paper
{
     constructor(x,y,w,h)
	{
		var options= {
		    isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
			}
			this.paperObj=loadImage("paper.png")
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
         
    }

display()
{
push();
translate(this.body.position.x, this.body.position.y)
imageMode(CENTER);
image(this.paperObj,0,0,75,75);
pop();	
}
}