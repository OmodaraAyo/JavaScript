function classTiming (time){
	dayTime = "PM"
	return time.filter((time) => time.toLowerCase().includes(dayTime.toLowerCase()))
}

console.log(classTiming(["9:00am","11:00am","1:00Pm","3:00pm","5:00pm"]));