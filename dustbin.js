class dustbin
{

    constructor(x,y)
    {

        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinHieght=213;
        this.wallThickness=20;
        
       this.image=loadImage("red dustbin.png")
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth, this.wallThickness,{isStatic:true})
        this.leftwallBody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinHieght/2,this.wallThickness,this.dustbinHieght,{isStatic:true})
      

        this.rightwallBody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinHieght/2,this.wallThickness,this.dustbinHieght,{isStatic:true});
        
        World.add(world,this.bottomBody)
        World.add(world,this,this.leftwallBody)
        World.add(world,this.rightwallBody);
    }
    display()
    {

     var posBottom=this.bottomBody.position;
     var posLeft=this.leftwallBody.position;
     var posRight=this.rightwallBody.position;

     push()
     translate(posLeft.x,posLeft.y);
     rectMode(CENTER)
     //strokeWwight(4);
     angleMode(RADIANS)
     fill(255)
     rotate(this.angle)
     //rect(0,0,this.wallThickness,this.dustbinHieght);
     pop()

     push()
     translate(posRight.x,posRight.y);
     rectMode(CENTER)
     //strokeWwight(4);
     angleMode(RADIANS)
     fill(255)
     rotate(-1*this.angle)
    // rect(0,0,this.wallThickness,this.dustbinHieght);
     pop();

     push()
     translate(posBottom.x,posBottom.y);
     rectMode(CENTER)
     //strokeWwight(4);
     angleMode(RADIANS)
     fill(255)
     imageMode(CENTER);
     image(this.image,0,-this.dustbinHieght/2,this.dustbinwidth,this.dustbinHieght)
    // rect(0,0,this.dustbinwidth,this.dustbinHieght);
     pop();



    }   

}