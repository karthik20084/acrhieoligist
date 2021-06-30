class Stone {
constructor(x,y,width,hieght){
var a ={
    'density':4,
    'friction': 0.5,
    'restitution':0.3
};
this.body =Matter.Bodies.rectangle(x,y,70,100,a);
this.x=x
this.y=y
this.width = 70;
this.hieght= 100;
World.add(world,this.body);
console.log(this.body);
}


display(){
    var stonepos=this.body.position;
 push()
translate(stonepos.x,stonepos.y);
rotate(this.body.angle);
strokeWeight(5);
stroke("black");
fill("grey");
rectMode(CENTER);
rect(0,0,this.width,this.hieght);
pop();


}
}