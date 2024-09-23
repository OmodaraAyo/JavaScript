function expensesCalculator(objects){
	total = 0;
	for(let i = 0; i < objects.length; i++){
		total += objects.get[i];
	}
	return total;
}

console.log(expensesCalculator({'groceries': 150, 'dinning': 20, 'transpotation': 500}));