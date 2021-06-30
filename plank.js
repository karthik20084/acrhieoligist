class Plank{
constructor(x,y,width,hieght){
    var a ={
        'density':4,
        'friction': 1.5,
        'restitution':5.0
    };
    this.body =Matter.Bodies.rectangle(x,y,150,200,a);
    this.x=x
    this.y=y
    this.width = 150;
    this.hieght= 200;
    World.add(world,this.body);
    console.log(this.body);

}
display(){
    var plankpos=this.body.position;
pop();
translate(plankpos.x,plankpos.y);
rotate(this.body.angle);
strokeWeight(5);
stroke("black");
fill("blue")
rectMode(CENTER);
rect(0,0,this.width,this.hieght);
pop();


}




}