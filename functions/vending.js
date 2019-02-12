
//function which takes in an array as payment and a number as price 
//and gives the change in 25 cents, 10 cents, 5 cents and 1 cents in an array 
//if the payment is not enough it returns the payment also in coins


function vending(price, payment){
    let payment2 = 0
    let price2 = price*100
    let arr = [0,0,0,0]
    let change = 0
    
    for(let i = 0; i<payment.length;i++){
      payment2+=payment[i]*100
    }
    
    if(payment2 > price2){
      change = payment2 - price2
    }else{
      change = payment2
    }
      
    if(change>=25){
        arr[3] = Math.floor(change/25),
        change = change-25*arr[3]
    }
  
    if(change>=10){
        arr[2] = Math.floor(change/10),
        change = change-10*arr[2]
    }
  
    if(change>=5){
        arr[1] = Math.floor(change/5),
        change = change - 5*arr[1]
    }
  
    arr[0] = change
  
      return arr
  }
  
  vending(1.89, [5.42])