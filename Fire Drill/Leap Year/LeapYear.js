function isLeapYear(year){
		if(year % 4 == 0) return true;
		else return false;
}

module.exports = {isLeapYear};
