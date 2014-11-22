
	/* Define the number of sprinkles to be used in the animation */
	const SPRINKLES = 70;

	function init() {
		
		/* Fill the empty container with sprinkles */
		var first = true;
		for (var i = 0; i < SPRINKLES; i++) {
			document.body.appendChild(createASprinkle(first));
			first = false;
		}
	}
	
	/*
		Receives the lowest and highest values of a range and
		returns a random integer that falls within that range.
	*/
	function randomInteger(low, high) {
		return low + Math.floor(Math.random() * (high - low));
	}

	/*
	   Receives the lowest and highest values of a range and
	   returns a random float that falls within that range.
	*/
	function randomFloat(low, high) {
		return low + Math.random() * (high - low);
	}

	function randomItem(items) {
		return items[randomInteger(0, items.length - 1)]
	}

	/* Returns a duration value for the falling animation.*/
	function durationValue(value) {
		return value + 's';
	}

	function createASprinkle(is_first) {
		var sprinkleS = ['2501','2500','2571','2572'];
		var superSprinkle = ['2501', '2500', '2571', '2572', '2501', '2571', '2500', '2501', '2571', '2572', '2500', '2571', '2501', '2572', '2500'];
		var color = ['red', 'yellow', 'orange', 'purple', 'blue', 'pink', 'green', 'sky'];

		/* Start by creating a wrapper div, and an empty span  */
		var sprinkleElement = document.createElement('div');
		sprinkleElement.className = 'sprinkle ' + randomItem(color);

		var sprinkle = document.createElement('span');
		sprinkle.innerHTML = '&#x' + randomItem(sprinkleS) + ';';

		sprinkleElement.appendChild(sprinkle);

		/* Randomly choose a spin animation */
		var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpin';

		 /* Randomly choose a side to anchor to, keeps the middle more dense and fits liquid layout */
		 var anchorSide = (Math.random() < 0.5) ? 'left' : 'right';

		/* Figure out a random duration for the fade and drop animations */
		var fadeAndDropDuration = durationValue(randomFloat(5, 11));

		/* Figure out another random duration for the spin animation */
		var spinDuration = durationValue(randomFloat(4, 8));

		// how long to wait before the sprinkles arrive
		var flakeDelay = is_first ? 0 : durationValue(randomFloat(0, 10));

		sprinkleElement.style.webkitAnimationName = 'fade, drop';
		sprinkleElement.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
		sprinkleElement.style.webkitAnimationDelay = flakeDelay;

		/* Position the sprinkle at a random location along the screen, anchored to either the left or the right*/
		sprinkleElement.style[anchorSide] = randomInteger(0, 60) + '%';

		sprinkle.style.webkitAnimationName = spinAnimationName;
		sprinkle.style.webkitAnimationDuration = spinDuration;


		/* Return this sprinkle element so it can be added to the document */
		return sprinkleElement;
	}


	window.onload = function()
	{
		setTimeout(init, 12000);
	}