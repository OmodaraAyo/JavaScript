const objCounter = {
		count: 0,
		step: 1,
		increment: function(){
				return this.count += this.step;
				},
		decrement:function(){
				return this.count -= step;
				},
}

console.log(objCounter.increment());
console.log(objCounter.increment());