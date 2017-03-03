const world = {
	goEveryWhere: function () {
		// what is `this` (i.e. how am I being invoked)
		this.locations.forEach(function (city) { 
			// what is `this` (i.e. how am I being invoked)
			this.makeStatements(city);
		})
	},
	makeStatements: function (place){
		const randomId = Math.floor(Math.random()*(randomStatements.length-1));
		console.log(randomStatements[randomId] + place);
	},
	locations: ['Berlin','Tokyo','New York City', 'London', 'Delhi', 'Shanghai', 'Mexico City', 'Cairo', 'Buenos Aires']
}

const randomStatements = [
	'The best water I ever tasted was from ',
	'Colors just seems so vibrant in the city center of ',
	'Have you seen the size of the dogs in ',
	'It is so humid here you swim to the next building ',
	'The stars just seem so much brighter from ',
	'I love to drink in ',
	'The best street food can definitely be found in the heart of '
]
function showOnScreen () {
	document.getElementById('code').innerHTML = world.goEveryWhere.toString()
}
showOnScreen()

world.goEveryWhere()