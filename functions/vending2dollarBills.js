

// change machine which returns 10's, 5's and 2's (no 1$ bill)


function change(cash) {
    
    let obj =  {
        two: 0,
        five: 0,
        ten: 0
    };
    
  if(cash % 2 === 0){
    obj.ten = Math.floor(cash/10)
    cash = cash - obj.ten * 10
    obj.two = Math.floor(cash/2)
  }else{
    cash = cash - 5
    obj.five = 1
    obj.ten = Math.floor(cash/10)
    cash = cash - obj.ten * 10
    obj.two = Math.floor(cash/2)
}
    return obj
}