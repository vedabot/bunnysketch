class Ground{
    constructor(x,y,w,h){
var ops ={
    isStatic:true
}
this.body = Bodies.rectangle(x,y,w,h,ops)
this.w = w
this.h=h
World.add(world,this.body)

    }


    display(){
        var pos = this.body.position
        push()
        fill("brown")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }

}