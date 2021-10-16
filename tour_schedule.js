//////////////////////////
//		FUNCTIONS		//
//////////////////////////

function getTotalDays(month, year) {
	var daysInMonth = new Date(month + " 01, " + year);
	daysInMonth.setDate(32)
	var dayId = daysInMonth.getDate();
	switch (dayId) {
	    case 1:
	        var totalDays = 31;
	        break;
	    case 2:
	        var totalDays = 30;
	        break;
	    case 3:
	        var totalDays = 29;
	        break;
	    case 4:
	        var totalDays = 28;
	        break;
	}
	return totalDays;
}

function getFirstCalId() {
	var tourMonth = new Date(monthsOfYear[monthNum] + " 01, " + currentYear);
	var firstCalId = tourMonth.getDay() + 1;
	return firstCalId;
}

function generateSchedule(location) {
	var tourList = [];
	tourList.unshift(location);
	var yearToProcess = currentYear;
	var monthToProcess = monthsOfYear[monthNum];
	var monthNumToProcess = monthNum;
	var calMonth = monthNumToProcess + 1;
	for (i = 0; i < bookingAhead; i++) {

		// get current month info
		var totalDays = getTotalDays(monthToProcess, yearToProcess);
		// console.log(location);
		// console.log('Scheduling for: ' + monthToProcess + "(" + calMonth + ") " + yearToProcess + " with " + totalDays + " days");
		if (calMonth < 10) {calMonth = "0" + calMonth;}

		// generate 10 tours in current month
		var x = 0;
		var randomDayList = [];
		while (x < toursPerMonth) {
			var randomDay = Math.floor(Math.random() * totalDays) + 1;
			if (randomDay < 10) {
				randomDay = "0" + randomDay;
			} else {
				randomDay = randomDay.toString();
			}
			if (randomDayList.includes(randomDay)) {
				continue;
			} else {
				randomDayList.push(randomDay);
				x++;
			}
		}
		for (c = 0; c < toursPerMonth; c++) {
			var randomTime = Math.floor(Math.random() * (15 - 9 + 1)) + 9;
			if (randomTime > 12) {
				randomTime = "0" + (randomTime - 12) + "PM";
			} else if (randomTime === 12) {
				randomTime += "PM";
			} else if (randomTime < 10) {
				randomTime = "0" + randomTime + "AM";
			} else {
				randomTime += "AM";
			}
			tourList.push("" + yearToProcess + calMonth + randomDayList[c] + randomTime);
		}

		// iterate before finishing loop
		switch (monthNumToProcess) {
			case 11:
				monthNumToProcess = 0;
				++yearToProcess;
				break;
			default:
				++monthNumToProcess;
				break;
		}
		monthToProcess = monthsOfYear[monthNumToProcess];
		calMonth = monthNumToProcess + 1;
	}
	return tourList.sort();
}

function eraseTours() {
	var n = 6;
	while (n > 0){
		var weekRow = document.getElementById('week' + n);
		if (weekRow.style.display === "block") {
			for (i = 7; i >= 1; i--) {
				var calDayDiv = document.getElementById('r' + n + 'd' + i);
				calDayDiv.getElementsByTagName('div')[1].innerHTML = "";
				calDayDiv.getElementsByTagName('div')[1].removeAttribute("class");
				if (calDayDiv.getElementsByTagName('div')[2]) {
					calDayDiv.getElementsByTagName('div')[2].remove();
				}
			}
		}
		n--;
	}
}

// show tour dates and times in displayed month
function displayTour(tourSched) {
	// erase displayed tours
	eraseTours();

	var tourTitle = tourSched[tourSched.length - 1];
	console.log('Showing ' + tourTitle + " tours");
	var thisMonthTours = [];

	// find first div ID in current month
	var firstDayId = getFirstCalId();

	// populate calendar with tour times
	for (i = 0; i < tourSched.length - 1; i++) {
		var yearTest = parseInt(tourSched[i].slice(0, 4));
		var monthTest = parseInt(tourSched[i].slice(4, 6));
		if (yearTest === currentYear && monthTest === monthNum + 1) {
			thisMonthTours.push(tourSched[i]);
		}
	}
	console.log('Tours this month:');
	for (i=0; i < thisMonthTours.length; i++) {
		var yearSlice = parseInt(thisMonthTours[i].slice(0, 4));
		var monthSlice = parseInt(thisMonthTours[i].slice(4, 6));
		var daySlice = parseInt(thisMonthTours[i].slice(6, 8));
		var timeSlice = parseInt(thisMonthTours[i].slice(8, 10));
		var ampmSlice = thisMonthTours[i].slice(10);
		var thisDay = firstDayId;
		var thisWeek = 1;
		console.log(monthSlice + "/" + daySlice + " @ " + (timeSlice + ampmSlice));
		var x = 1;
		while (x <= daySlice) {
			if (thisDay <= 7) {
				if (x === daySlice) {
					var calDayDiv = document.getElementById('r' + thisWeek + 'd' + thisDay);
					calDayDiv.getElementsByTagName('div')[1].innerHTML = timeSlice + ampmSlice;
					calDayDiv.getElementsByTagName('div')[1].setAttribute("class", "tour-time");
					var cartDivHTML = '<form action="shopping.html"><fieldset id="calToCart"><label for="numTix">Tickets:&nbsp;</label><input name="ticket-quantity" id="numTix" type="number" value="1" step="1" min="1" max="8" /><input type="submit" value="Add to Cart" /><input type="hidden" name="location" value="' + selectedTour + '" /></fieldset></form>';
					var cartDiv = document.createElement('div');
					cartDiv.innerHTML = cartDivHTML;
					calDayDiv.appendChild(cartDiv);
					calDayDiv.getElementsByTagName('div')[2].setAttribute("class", "add-to-cart");
				}
				thisDay++;
				x++;
			} else {
				thisDay = 1;
				thisWeek++;
			}
		}
	}
}

function highlightLocation(loc) {
	var currentDiv = document.getElementById(selectedTour + '-overlay');
	var highlightDiv = document.getElementById(loc + '-overlay');
	if (selectedTour !== loc) {
		currentDiv.style.display = "none";
		highlightDiv.style.display = "block";
		selectedTour = loc;
	} else {
		//highlightDiv.style.display = "block";
	}
}

function setUpTour(tourName) {
	var tourLocations = ["tokyo", "kyoto", "osaka"];
	if (selectedTour === "") {selectedTour = tourName;}
	switch (tourLocations.indexOf(tourName)) {
		case 0:
			highlightLocation(tourName);
			displayTour(tokyoTourSched);
			break;
		case 1:
			highlightLocation(tourName);
			displayTour(kyotoTourSched);
			break;
		case 2:
			highlightLocation(tourName);
			displayTour(osakaTourSched);
			break;
		
	}
}

function createEventListeners() {
	var tokyoShowTours = document.getElementById('tokyoItem');
	var kyotoShowTours = document.getElementById('kyotoItem');
	var osakaShowTours = document.getElementById('osakaItem');
	if (tokyoShowTours.addEventListener) {
		tokyoShowTours.addEventListener('click', function() {setUpTour("tokyo");}, false);
		kyotoShowTours.addEventListener('click', function() {setUpTour("kyoto");}, false);
		osakaShowTours.addEventListener('click', function() {setUpTour("osaka");}, false);
		
	} else if (tokyoShowTours.attachEvent) {
		tokyoShowTours.attachEvent('onclick', function() {setUpTour("tokyo");});
		kyotoShowTours.attachEvent('onclick', function() {setUpTour("kyoto");});
		osakaShowTours.attachEvent('onclick', function() {setUpTour("osaka");});
		
	}
}

//////////////////////////
//		CODE BODY		//
//////////////////////////

// global variables
var bookingAhead = 6;
var toursPerMonth = 6;
var selectedTour = "";

// create tour schedules for each Location
var tokyoTourSched = generateSchedule("tokyo");
var kyotoTourSched = generateSchedule("kyoto");
var osakaTourSched = generateSchedule("osaka");

// execute functions on page load
if (window.addEventListener) {
	window.addEventListener('load', createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', createEventListeners);
}
