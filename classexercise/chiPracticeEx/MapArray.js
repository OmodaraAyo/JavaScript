function multiplyByTwo(param){
    let result = param.map((number)=> number * 2)
    return result
}
function getName(thisArray){
    // let result = thisArray.map((obj)=> obj["name"])
    let result = thisArray.map(({name})=> name)
    return result
}

let arr = [{name: "john", age:25}, {name:"jane", age:24}]

console.log(multiplyByTwo([3,4,5,6,7,8]));
console.log(getName(arr));