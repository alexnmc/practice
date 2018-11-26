

/*Sum up all of the integers in the numbers array.
Instead of returning the sum invoke cb and pass in the sum there.*/



function sumArray(numbers, cb) {
    sum=0;
    for(i=0;i<numbers.length;i++){x+=numbers[i]}
    return cb(sum)
  }