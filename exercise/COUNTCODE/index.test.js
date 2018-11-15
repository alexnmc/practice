




 var countCode = require("./index")


 describe("The countCode function", function(){

    test("should return a number", function(){
         expect(typeof countCode("something")).toBe("number")
        
    })

    test("should receive a string as argument", function(){
          expect(countCode(3)).toBe("You must provide a string as an argument")
          

    })

    test("should return correct code count amount", function(){
           expect(countCode("aaacodebb")).toBe(1)
           expect(countCode("codexbcodes")).toBe(2)
           expect(countCode("codexcodebcodes")).toBe(3)


    })
 })



  
  