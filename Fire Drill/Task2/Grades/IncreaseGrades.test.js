const {increaseScoresBy} = require ("./IncreasingGrades.js")

test("incresingScoresBy functionality", ()=> {
	let number = [85,92,78,88,95,100]
	let result = increaseScoresBy(number)
	expect(result).toEqual([90,97,83,93,100,100]) 
})