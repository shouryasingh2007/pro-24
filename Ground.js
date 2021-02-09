class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        
        this.Ground = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.height = height
        World.add(world,this.Ground)
    }
      display(){
          var pos = this.Ground.position;
          rectMode(CENTER)
          fill("brown");
          rect(pos.x,pos.y,this.width,this.height);
      }
    }