function increaseScoresBy(number){
	return number.map((number)=> number == 100? number:number + 5);

}
module.exports = {increaseScoresBy};