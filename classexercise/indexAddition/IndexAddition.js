function indexAddition(my_array){
    new_array = []
    for(let i = 0; i < my_array.length; i+=2){
        new_array.push(my_array[i] + my_array[i+1])
    }
    return new_array
}
module.exports = {indexAddition};