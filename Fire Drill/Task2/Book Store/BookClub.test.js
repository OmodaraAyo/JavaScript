const {distributeBooks} = require ("./BookClub.js")

test("distributeBooks functionality",()=> {
	let members = ["Emily", "Jack", "Sophia", "Daniel"]
	let books = ["GoodDays", "Love Story", "Bad Dreams", "Kata"]
	let result = distributeBooks(members,books)
	expect(result).toEqual({Emily: 'GoodDays',Jack: 'Love Story',Sophia: 'Bad Dreams',Daniel: 'Kata'})
})