function expensesCalculator(objects){
	const values = Object.values(objects);
	total = 0;
	for(let i = 0; i < values.length; i++){
		total += values[i];
	}
	return total;
}
module.exports = {expensesCalculator};
//const values = Object.values(objects);
//	total = 0;
//	values.forEach(value =>{
//		total += value;
//	})
//	return total;