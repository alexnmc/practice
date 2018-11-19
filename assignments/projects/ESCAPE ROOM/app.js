
  var readl = require('readline-sync')

  var look = true
   var hasWon = false
   var isDead = false
   var key = false

   while(!hasWon && !isDead){
     var actions = ['find key', 'open door', 'put hand in hole']
     var i = readl.keyInSelect(actions, 'Choose one of the following actions :\n\n')
     
     if(actions[i]=== 'put hand in hole'){
              isDead = true; 
              console.log("DEAD")
      }else if(actions[i] === 'find key'){ 
        
                        while(look){
        
        
                            var keys =['on the table', 'in the fridge', 'under the bed'];
                               
                            var j = readl.keyInSelect(keys, 'Where do you want to look ?:');
                               
                            if(keys[j]==='under the bed'){
                              console.log(" GOOD JOB YOU FOUND THE KEY, OPEN THE DOOR");
                              look=false;
                              key=true
                            }else{ 
                              console.log("NOT HERE....KEEP LOOKING!!!!!!!!!!!!")
                            }
                        }
      }else if(actions[i] === 'open door'){
             if(key===true){
               console.log("YOU WON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"); 
               hasWon = true;
              }else{
               console.log("LOOK FOR THE KEY FIRST!")}}
      
      }
      