

class Player{
    constructor( totalCoins, status, hasStar , gameActive = true){
    this.name = "Luigi";
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = gameActive;
    }

     setName(namePicked){
         this.name = namePicked
     }

     gotHit(){
      if(this.status === "Powered Up"){
          this.status = "Big"
      }else if(this.status === "Big"){
          this.status = "Small"
      }else if(this.status === "Small"){
           this.status = "Dead" ;
           this.gameActive = false
      }
     }

     gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
        }else if(this.status === "Powered Up"){
            this.hasStar = true
        }
     }

     
     addCoin(){
          this.totalCoins += 1    
     }

     print(){
        console.log(`\n Name: ${this.name}\n Status: ${this.status}\n Total coins: ${this.totalCoins}\n Star: ${this.hasStar}`)
     }

}
      let player1 = new Player(0, "Powered Up", false)
      player1.setName("Mario")

    function randomRange(){
    let num = Math.floor(Math.random()*3)
    if(num === 0){
        player1.gotHit()
    }else if(num === 1){
        player1.gotPowerup()
    }else if(num === 2){
        player1.addCoin()
    }
    player1.print()
    endGame()

}

function endGame() {
    if(player1.gameActive === false){
        clearInterval(setInt)
    }
}

let setInt = setInterval(randomRange, 1000)


 