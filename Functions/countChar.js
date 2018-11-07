
function countChar(str){
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < str.length; i++){
       for (var j = i; j < str.length; j++){    
        if(str[i] == str[j]){
        m++};
            if (mf < m){
            mf = m;              // I'm not sure how it works ... 
        item = str[i];
        }
       }
            m=0;
    }
Console.log( mf);
}
countChar("hello")       
