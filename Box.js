class Box extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.Visibility=255
  }
display(){
 if(this.body.speed<9){
   super.display()
 }else{
   //World.remove(world,this.body)
   push()
   this.Visibility=this.Visibility-5
   fill("red")
   tint(255,this.Visibility)
   //image(this.body.position.x,this.body.position.y,50,50)
   //pop()
 }
}
score(){
  if(this.Visibility < 200 && this.Visibility > -105){
    score++
  }
}
};
