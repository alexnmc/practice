

   function sum(a,b){
       
    if(typeof a !== 'number' || typeof b !== 'number'){
         return "Please enter two numbers"
    }
    
       return a + b
   }



   module.exports = sum