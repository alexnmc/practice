
  var sum = require('./sum')

  
  
  
  describe("the sum function", function(){
  
      it('should only receive numbers as inputs', function(){
          expect(sum('a', true)).toBe("Please enter two numbers")
      })
  
     test("adds 1+2 to equal 3",  function(){
        expect(sum(1,2)).toBe(3)
  })

  })

  // expect().toBe() - can use it only on primitive data types : numbers, strings,  etc...
  // expect().not.toBe() - guess what this does :)



  