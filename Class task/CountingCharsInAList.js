function countChars(my_array){
	myList = {};
	for(let i = 0; i < my_array.length; i++){
		if(my_array[i] in myList){
			myList[my_array[i]] += 1
		}
		else{
			myList[my_array[i]] = 1
		}
	}
	return myList
}
module.exports = {countChars};
//console.log(countChars([1,1,1,2,2,3,2,2,8,8,8]));

//for(let char of my_array){
//		myList[char] = (myList[char]||0)+1
//		
//	}
			