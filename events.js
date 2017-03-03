function EventEmitter () {
	this.events = [];
}

EventEmitter.prototype.addEventListener = function (eventName, callback) {
	// here is where we would add a `click` event as a key in our `events` array and set it equal to an empty array!
	if (!this.events[eventName]) this.events[eventName] = []; 
	// here we push the function sent in to associate it with our `click` event
	if (typeof callback === 'function') this.events[eventName].push(callback)
}

EventEmitter.prototype.emit = function (eventName) {
	// if this event exists we will call all the functions that have been registered
	if (this.events[eventName]) {
		let event = this.events[eventName];
		for (let registeredCallbackId = 0; registeredCallbackId < event.length; registeredCallbackId++) {
		// what is the context here?!?!?!
			event[registeredCallbackId]();
		}
	}
}

// now we have a 'button' variable on our window scope -- try logging it if you don't believe me!!!
const button = new EventEmitter();