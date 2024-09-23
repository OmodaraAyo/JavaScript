const {classTiming} = require("./ClassTiming.js");

test("classTiming functionality", ()=>{
		let time = ["9:00am","11:00am","1:00Pm","3:00pm","5:00pm"];
		let result = classTiming(time);
		expect(result).toEqual(["1:00Pm", "3:00pm", "5:00pm"]);
})