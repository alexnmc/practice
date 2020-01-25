


function str(str) {
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count++;
      if (str[i] !== str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    console.log(output);
  }
  
  
  str('fcf')  //returns how many times a character is in a row

  
// encoding and decodung based on the above algorithm
  
  function encode(str) {
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      count++;
      if (str[i] !== str[i+1]) {
        count > 1 ?  output += "~" + str[i] + count : output += str[i]
        count = 0;
      }
    }
    console.log(output);
  }


  encode('abbbccf')

  
  
  
  function decode(str) {
    var output = ''
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '~'){
          for(let j = 1; j<=str[i+2]; j++){
            output += str[i+1]
          }
          i+=2
        }else{
          output += str[i]
        }
      }
    console.log(output);
  }


  decode('~m3~b2~c4abcd')