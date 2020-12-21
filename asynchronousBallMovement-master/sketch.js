var canvas,db,gamestate,playercount,allplayers,distance;
var form,player,game;

function setup(){
    canvas=createCanvas(displayWidth,displayHeight)
    db=firebase.database();
    
    game= new Game()
    game.getstate()
    game.start()

}

function draw(){
    background("white");
   
    
  
}

