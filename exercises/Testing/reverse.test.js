var reverse = require('./reverse')

test(" returns given array in reverse order", function(){
    expect(reverse([1,2,3])).toEqual([3,2,1])
})

 // expect().toEqual() - it takes complex data types, ex: arrays, objects..