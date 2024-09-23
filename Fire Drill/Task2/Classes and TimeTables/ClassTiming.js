function classTiming (time){
	dayTime = "PM"
	return time.filter((time) => time.toLowerCase().includes(dayTime.toLowerCase()))
}

module.exports = {classTiming};