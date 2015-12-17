;(function() {
	"use strict";

	var number, // The number of floors
		slider = document.querySelector(".slider"),
		text = document.querySelector(".number"),
		door = document.querySelector(".door");

	text.value = slider.value;
	number = slider.value;

	slider.addEventListener('input', function () {
		text.value = slider.value;
	});

	slider.addEventListener('change', function () {
		var difference;	// difference between number and newNumber

		difference = slider.value - number;
		makeChanges(difference);

		number = slider.value; // set new value of number
	});



	// analyzes range changes and make a decision add/del floors
	function makeChanges(diff) {
		if (diff === 0) {
			console.log("Changes don't needed.");
		} else if (diff > 0) {
			addFloors(diff);
		} else {
			delFlors(Math.abs(diff));
		}
	}


	// insert floors in building before door
	function addFloors(numOfFloors) {
		var floors;

		floors = createFloors(numOfFloors);
		door.parentNode.insertBefore(floors, door);
	}


	// delete floors
	function delFlors(numOfFloors) {
		var j;

		for (j = 0; j < numOfFloors; j += 1) {
			door.parentNode.removeChild(door.previousElementSibling);
		}
	}


	// return block of elements
	function createFloors(numOfFloors) {
		var i,
			part = document.createDocumentFragment(),
			floor = document.createElement('div'),
			window = document.createElement('div');

		floor.className = "floor";
		window.className = "window";

		floor.appendChild(window);
		floor.appendChild(window.cloneNode(true));

		// create duplicates of floor and add to Fragment
		for (i = 0; i < numOfFloors; i += 1) {
			part.appendChild(floor.cloneNode(true));
		}

		return part;
	}

}());
