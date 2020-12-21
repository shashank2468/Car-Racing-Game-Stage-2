class Game{
    constructor(){


    }
    getstate(){
   db.ref("Gamestate").on("value",(data)=>{
       gamestate=data.val()
   })
   
    }
    updateState(state){
    db.ref("Gamestate").update({
        Gamestate:state
    })
    }
    async start(){
        if(gamestate==0){
            player= new Player()
            var pcref=await db.ref("playercount").once("value")

            if(pcref.exists()){
                playercount=pcref.val()
                player.getcount()


            }

        form= new Form()
        form.display()

          }
    }
}