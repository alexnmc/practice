
var ask = require("readline-sync")

// constructor functions                                    
function Player(name, hp, ){
    this.name = name
    this.hp = hp
    this.attack = function(){
        console.log("You started the ATTACK !!!\n\n")
        return Math.floor(Math.random() * (50 - 30) + 30)}
    this.inventory = []
    
}

function Enemy(type, hp, inv){
    this.type = type
    this.hp = hp
    this.attack  = function(){
        return Math.floor(Math.random() * (50 - 20) + 20)
    }
    this.inventory = inv
}


//functions
function walk(){
     console.log("You are walking....\n\n")
   if(Math.floor(Math.random()*(1 - 4) + 4) === 1){underAttack()}
}


function generateEnemy(){
     var rndEn = Math.floor(Math.random()*(1-4) + 4)
     if(rndEn === 1){var newEnemy = new Enemy("NINJA" , 100, "Stick")}
     else if(rndEn === 2){ var newEnemy = new Enemy("LION", 50, "Bone")}
     else{ var newEnemy = new Enemy("BIRD", 75, "Coin")}
     return newEnemy
}


function underAttack(){
    var currentEnemy = generateEnemy()
    console.log(`WATCH OUT ${currentEnemy.type} !!! ...WHAT DO YOU WANT TO DO???:`)
  while(player1.hp>0&&currentEnemy.hp>0){
    var defense = ["ATTACK", " RUN AWAY"]
    var defenseAction = ask.keyInSelect(defense, 'WHAT DO YOU WANT TO DO ???\n\n')
    if(defenseAction === 0 ){ currentEnemy.hp -=  player1.attack()
       console.log(`WOWW  You hit ${currentEnemy.type} his health is at ${currentEnemy.hp}\n\n`)
            if(currentEnemy.hp > 0){player1.hp -= currentEnemy.attack(); if(player1.hp <= 0){console.log(" WOWWW...HE HIT YOU HARD...THE ENEMY KILLED YOU...GAME OVER :((( \n\n")
                                                                          }else{console.log(`The enemy hit you back, your health is at ${player1.hp}\n\n`)
                                                                          }
            }else{player1.inventory.push(currentEnemy.inventory) ; player1.hp += 25 ; console.log("YESSS !!!  You KILLED him !!!\n\n  Your health was increased by 25 and you took his item :)\n\n" )
                     if(player1.inventory.length === 3){player1.hp = 0 ; console.log("YOU HAVE 3 ITEMS YOU WON !!!GAME OVER!")} } // add winning condition before that curly bracket, if (the inventory contains all the 3 items){ console.log("you won")} ...                         
    }else if(defenseAction === 1){
            if( Math.floor(Math.random()*(1 - 3) + 3) === 1){
                   console.log("You can't escape, you have to fight!!!!")
            }else{ currentEnemy.hp = 0 ;console.log("Good job, you escaped...")
            }
    }else if(defenseAction === -1){console.log("You can't quit now..you have to do something:")}
  }
}

//START GAME

console.log("HELLO PLAYER !\n")
 var newName = ask.question("What's your name? \n\n")
 console.log(`Thank you ${newName.toUpperCase()}, let's start the game!`)
 player1 = new Player(newName, 100)
 while(player1.hp >0){
     var startAction = ["Start Walikng", 'Inventory']
     var choice = ask.keyInSelect(startAction, "What would you like to do? \n\n")
         if(choice === 0){
             walk()
        }else if(choice === 1){if(player1.inventory.length === 0 ){console.log("Your inventory is EMPTY")}
                                else{console.log(`Your inventory items are: ${player1.inventory} `)}
         
        }else if(choice === -1){ console.log("You quit...TRY AGAIN"); player1.hp = 0
        
        }


}