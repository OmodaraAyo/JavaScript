
function distributeBooks(members, books){
	let book = {};
	for(let i = 0; i < members.length; i++){
		book[members[i]] = books[i];
	}
	return book;
}

module.exports = {distributeBooks}