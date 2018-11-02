
var ask = require("readline-sync")

// constructor functions                                    

function Player(name, hp, ){
    this.name = name
    this.hp = hp
    this.attack = function(){
        console.log("You started the ATTACK !!!\n\n")
        return Math.floor(Math.random() * (50 - 20) + 20)}
    this.inventory = []
    
}

function Enemy(type, hp, inv){
    this.type = type
    this.hp = hp
    this.attack  = function(){
        return Math.floor(Math.random() * (50 - 10) + 10)
    }
    this.inventory = inv
}


//functions

function winner(){
     var a = player1.inventory.includes("Coin")
     var b = player1.inventory.includes("Bone")
     var c = player1.inventory.includes("Stick")
        if(a === true && b === true && c === true){
            player1.hp = 0 ; console.log(" CONGRATULATIONS, YOU HAVE ALL THE ITEMS, YOU WON !!!GAME OVER!\n\n")
        } 
}


function walk(){
     console.log("You are walking....\n\n")
     if(Math.floor(Math.random()*(1 - 4) + 4) === 1){
         underAttack()
     }
}


function generateEnemy(){
     var rndEn = Math.floor(Math.random()*(1-4) + 4)
     if(rndEn === 1){
         var newEnemy = new Enemy("NINJA" , 100, "Stick")
     }
     else if(rndEn === 2){ 
         var newEnemy = new Enemy("LION", 50, "Bone")
     }
     else{ 
         var newEnemy = new Enemy("BIRD", 75, "Coin")
     }
     return newEnemy
}


function underAttack(){
    var runaway = false
    var currentEnemy = generateEnemy()
    console.log(`WATCH OUT ${currentEnemy.type} !!! ...WHAT DO YOU WANT TO DO???:`)
  while(player1.hp>0 && currentEnemy.hp>0){
    var defense = ["ATTACK", " RUN AWAY"]
    var defenseAction = ask.keyInSelect(defense, 'WHAT DO YOU WANT TO DO ???\n\n')
    if(defenseAction === 0 ){ 
        currentEnemy.hp -=  player1.attack()
        console.log(`WOWW  You hit ${currentEnemy.type} his health is at ${currentEnemy.hp}\n\n`)
            if(currentEnemy.hp > 0){
                player1.hp -= currentEnemy.attack(); 
                    if(player1.hp <= 0){
                        console.log(" WOWWW...HE HIT YOU HARD...THE ENEMY KILLED YOU...GAME OVER :((( \n\n")
                    }else{
                        console.log(`The enemy hit you back, your health is at ${player1.hp}\n\n`)
                    }
            }else{
                player1.inventory.push(currentEnemy.inventory) ; player1.hp += 25 ; console.log("YESSS !!!  You KILLED him !!!\n\n  Your health was increased by 25 and you took his item :)\n\n" )
                                            winner()
            }                  
    }else if(defenseAction === 1 ){
        var run = Math.floor(Math.random()*(1 - 3) + 3)
            if( run  === 1 && runaway === false){ 
                   runaway = true ;
                   console.log("You can't escape, you have to fight!!!!") 
            }else if( run === 2 && runaway === false){ 
                runaway = true;
                currentEnemy.hp = 0 ;console.log("Good job, you escaped...\n\n")
            }else if((run === 1 || run === 2)&&(runaway === true)){
                console.log("You can't run this time")
            }
    }else if(defenseAction === -1){
        console.log("You can't quit now..you have to do something: ")
  } }   
}                             

//START GAME

     console.log("HELLO PLAYER !\n")
 var newName = ask.question("What's your name? \n\n")
 var nAme = newName.toUpperCase()
 console.log(`\n\nThank you ${nAme}, let's START the game!\n\n You win if you collect 3 different items from your enemies!\n\n Good luck!\n\n`)
 player1 = new Player(newName, 100)
 while(player1.hp >0){
   var answer = ask.keyIn("PRESS w TO START WALKING \nPRESS i TO SEE YOUR INVENTORY \nPRESS p TO SEE YOUR INFO\n\n", {limit:'wip'})
    if(answer === "w"){
              walk()
    }else if(answer === "i"){ 
        if(player1.inventory.length === 0 ){
            console.log("\n\nYour inventory is EMPTY\n\n")
        }else{
            console.log(`\n\nYour inventory items are: ${player1.inventory} \n\n`)
        }
    }else{
            console.log(`\n\nName: ${nAme}\nHealth: ${player1.hp}\nAttack Power: from 20 to 50\n\n`)}
 }
    
 
 
 
 
 
 
 
 
 
 /* 
       another way to start the game:
     var startAction = ["Start Walikng", 'Inventory']
     var choice = ask.keyInSelect(startAction, "What would you like to do? \n\n")
        if(choice === 0){
             walk()
        }else if(choice === 1){
            if(player1.inventory.length === 0 ){
                console.log("Your inventory is EMPTY")
            }else{
                console.log(`Your inventory items are: ${player1.inventory} `)
            }
        }else if(choice === -1){ 
            console.log("You quit...TRY AGAIN"); player1.hp = 0
        }
    */