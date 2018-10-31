var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];

while(i !== 'fight bears'){
  
  var i = ask.keyInSelect(options, "What would you like to do today?: ");
  
    if(i === -1){console.log('What would you like to do today?:')
  }else if(options[i] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  }else if(options[i]=== "shoot guns") {
    console.log("You shoot guns.");
  }else{ 
  i  = "fight bears" ;} 
  }  
  console.log("You fought a bear and got beat up!")


