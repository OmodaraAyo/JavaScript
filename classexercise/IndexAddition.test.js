const{indexAddition} = require("./IndexAddition.js");

test("testing indexAddition Functionality", ()=> {
        let userInput = [2,3,4,5,6,7];
        let result = indexAddition(userInput);
        expect(result).toEqual([5,9,13]);
})


test("testing indexAddition Functionality2", ()=> {
        let userInput = [1,3,5,1,6,3];
        let result = indexAddition(userInput);
        expect(result).toEqual([4,6.9]);
})

