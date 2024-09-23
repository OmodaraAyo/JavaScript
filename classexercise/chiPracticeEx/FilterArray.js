let myArray =  [1,2,3,4,5,6];
let fruits = ["banana", "grape", "apple"]

// filter returns what has been deleted or removed from the array
function evenNumber(number){
   return number.filter((number) => number % 2)
}

function getFruitLength(array){
    let answer =  array.filter((fruits) => fruits.length > 5)
    return answer
}

console.log(getFruitLength(fruits));
console.log(evenNumber(myArray));