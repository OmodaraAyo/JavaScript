const {filterScores} = require("./StundentScores.js")

test("filterScores funtionality",()=>{
	let scores = [20,30,75,40,70,71]
	let result = filterScores(scores)
	expect(result).toEqual([75,70,71])
})