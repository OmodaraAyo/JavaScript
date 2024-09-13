function isPrime(number){
	let prime = 0;
	for(let i = 1; i <= number / 2; i++){
		if(number % i == 0){
			prime += i;
		}	
	}
	if(prime == 1){
		return true;
	}
	else{
		return false;
	}
}
module.exports = {isPrime};