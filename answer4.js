// the state of button's things
  events = [
	  click: [
		  function() {
		    function loop(city) {
		      this.makeStatements(city);
		    }
		    const boundFunc = loop.bind(this)
		    // the `this` of the invoked method is the `click` array (object) that we are inside of!!
		    this.locations.forEach(boundFunc)
		  }
	  ]
  ];

//when button.emit('click') is called what happens?
button.emit = function (eventName) {
	// we loop through all of the events
	// context === button (object this method was called on)
	if (this.events[eventName]) {
		for (let registeredCallbackId = 0; registeredCallbackId < this.events[eventName].length; registeredCallbackId++) {
			// you have maybe only seen us invoke a method on an object with dot notation
				// below we are invoking the method on the `click` key (which is an object -- an array) found on the this.events obj
				// therefore, the `this` of the invoked method is the `click` array (object)
			this.events[eventName][registeredCallbackId]();
		}
	}
}