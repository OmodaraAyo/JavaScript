function outerFunction(){
		console.log("outerFunction");
		function innerFunction(){
			console.log("inner Function");
		}
		innerFunction();
}
outerFunction();