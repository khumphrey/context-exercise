// bind
	goEveryWhere: function () {
		//let's make the loop function we will add to our forEach
		function loop (city) {
			this.makeStatements(city);
		}
		// now we will create a new function that is bound!!
		const boundFunc = loop.bind(this)
		this.locations.forEach(boundFunc)
	},
