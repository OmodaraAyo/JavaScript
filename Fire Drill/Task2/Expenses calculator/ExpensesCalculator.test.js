const {expensesCalculator} = require("./ExpensesCalculator");

test("expensesCalculator functionality", ()=> {
	let ayoExpenses = {groceries: 150, dinning: 20, transpotation: 500, boutique: 200};
	let result = expensesCalculator(ayoExpenses);
	expect(result).toBe(870);
})