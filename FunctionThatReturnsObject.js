function calculate(){
	return{
		add: function(a,b){
			return a + b;
		},
		subtract:(a,b) => {
			return a - b;
		}
		subtract2:(a,b) => {return a - b}
	};
};
let result = calculate();
console.log(result.add(1,2))
console.log(result.subtract(5,2))