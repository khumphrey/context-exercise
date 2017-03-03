// initial variable
	goEveryWhere: function () {
		this.locations.forEach(function (city) { 
			this.makeStatements(city);
		}, this)
	},