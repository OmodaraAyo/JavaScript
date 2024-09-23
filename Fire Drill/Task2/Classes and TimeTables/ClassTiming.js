function classTiming (time){
	return time.filter((time) => time.includes("pm"))
}

console.log(classTiming(["9:00am","11:00am","1:00pm","3:00pm","5:00pm"]));