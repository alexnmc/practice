

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
           this.status = "Dead"
           this.gameActive = false
      }
     }

     gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
        }else if(this.status === "Powered Up"){
            this.hasStarr = true
        }
     }

     
     addCoin(){
          totalCoins++
     }

     print(){
        console.log(`\n Name: ${this.name}\n Status: ${this.status}\n Total coins: ${this.totalCoins}\n Star: ${this.hasStar}`)
     }

}


function randomRange(){
    let num = Math.floor(Math.random()*(0-3)+3)
    if(num === 0){
        gotHit()
    }else if(num === 1){
        gotPowerup()
    }else{
        addCoin()
    }
}
     
    

 