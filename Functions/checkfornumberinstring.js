function checkForNumberInString(arr){
    var newArr= []
    for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr[i].length;j++){
        if(Number(arr[i][j])==arr[i][j]){
            j=arr[i].length;
            newArr.push(arr[i])
        }
      }
    }
     return newArr
}