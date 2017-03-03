// what we already had 
	// WITHOUT the invocation of world.goEveryWhere 
	// WITH 
		// world.setUpWorld created, made the innerHTML so we can see it, and invoked at the end of the file
		// a simulated click event
const world = {
	setUpWorld: function () {
		// button is a variable we have available to us because of the order of the scripts in events.html
		button.addEventListener('click', this.goEveryWhere)
	},
	goEveryWhere: function () {
		function loop (city) {
			this.makeStatements(city);
		}
		const boundFunc = loop.bind(this)
		this.locations.forEach(boundFunc)
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
	document.getElementById('code').innerHTML = world.setUpWorld.toString()
}
showOnScreen()

world.setUpWorld()

//simulating a click event
button.emit('click');
