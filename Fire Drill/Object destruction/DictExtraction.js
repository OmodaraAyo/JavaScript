function Person(title, author, yearPublished){
	const book = {};
	book.title = title;
	book.author = author;
	book.yearPublished = yearPublished;
}


let person = new Person();
const {tile, author, yearPublished} = person;
person.title = "The Great Gatsby";
person.author = "F.Scott Fitzgerald";
person.yearPublished = "1925";
console.log(person.title + " by " + person.author);