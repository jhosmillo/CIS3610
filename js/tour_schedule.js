//////////////////////////
//		FUNCTIONS		//
//////////////////////////

function getTotalDays(month, year) {
	let daysInMonth = new Date(month + " 01, " + year);
	daysInMonth.setDate(32)
	let dayId = daysInMonth.getDate();
	let totalDays;
	switch (dayId) {
	    case 1:
	        totalDays = 31;
	        break;
	    case 2:
	        totalDays = 30;
	        break;
	    case 3:
	        totalDays = 29;
	        break;
	    case 4:
	        totalDays = 28;
	        break;
	}
	return totalDays;
}

function getFirstCalId() {
	let tourMonth = new Date(monthsOfYear[monthNum] + " 01, " + currentYear);
	let firstCalId = tourMonth.getDay() + 1;
	return firstCalId;
}

function generateSchedule(location) {
	let tourList = [];
	tourList.unshift(location);
	let yearToProcess = currentYear;
	let monthToProcess = monthsOfYear[monthNum];
	let monthNumToProcess = monthNum;
	let calMonth = monthNumToProcess + 1;
	for (i = 0; i < bookingAhead; i++) {

		// get current month info
		let totalDays = getTotalDays(monthToProcess, yearToProcess);
		// console.log(location);
		// console.log('Scheduling for: ' + monthToProcess + "(" + calMonth + ") " + yearToProcess + " with " + totalDays + " days");
		if (calMonth < 10) {calMonth = "0" + calMonth;}

		// generate 10 tours in current month
		let x = 0;
		let randomDayList = [];
		while (x < toursPerMonth) {
			let randomDay = Math.floor(Math.random() * totalDays) + 1;
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
			let randomTime = Math.floor(Math.random() * (15 - 9 + 1)) + 9;
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
	let n = 6;
	while (n > 0){
		let weekRow = document.getElementById('week' + n);
		if (weekRow.style.display === "block") {
			for (i = 7; i >= 1; i--) {
				let calDayDiv = document.getElementById('r' + n + 'd' + i);
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

	let tourTitle = tourSched[tourSched.length - 1];
	console.log('Showing ' + tourTitle + " tours");
	let thisMonthTours = [];

	// find first div ID in current month
	let firstDayId = getFirstCalId();

	// populate calendar with tour times
	for (i = 0; i < tourSched.length - 1; i++) {
		let yearTest = parseInt(tourSched[i].slice(0, 4));
		let monthTest = parseInt(tourSched[i].slice(4, 6));
		if (yearTest === currentYear && monthTest === monthNum + 1) {
			thisMonthTours.push(tourSched[i]);
		}
	}
	console.log('Tours this month:');
	for (i=0; i < thisMonthTours.length; i++) {
		let yearSlice = parseInt(thisMonthTours[i].slice(0, 4));
		let monthSlice = parseInt(thisMonthTours[i].slice(4, 6));
		let daySlice = parseInt(thisMonthTours[i].slice(6, 8));
		let timeSlice = parseInt(thisMonthTours[i].slice(8, 10));
		let ampmSlice = thisMonthTours[i].slice(10);
		let thisDay = firstDayId;
		let thisWeek = 1;
		console.log(monthSlice + "/" + daySlice + " @ " + (timeSlice + ampmSlice));
		let x = 1;
		while (x <= daySlice) {
			if (thisDay <= 7) {
				if (x === daySlice) {
					let calDayDiv = document.getElementById('r' + thisWeek + 'd' + thisDay);
					calDayDiv.getElementsByTagName('div')[1].innerHTML = timeSlice + ampmSlice;
					calDayDiv.getElementsByTagName('div')[1].setAttribute("class", "tour-time");
					let cartDivHTML = '<form action="cart.html"><fieldset id="calToCart"><label for="numTix">Tickets:&nbsp;</label><input name="ticket-quantity" id="numTix" type="number" value="1" step="1" min="1" max="8" /><input type="submit" value="Add to Cart" /><input type="hidden" name="location" value="' + selectedTour + '" /></fieldset></form>';
					let cartDiv = document.createElement('div');
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



function setUpTour(tourName) {
	let tourLocations = ["Tokyo", "Kyoto", "Osaka"];
	if (selectedTour === "") {selectedTour = tourName;}
	switch (tourLocations.indexOf(tourName)) {
		case 0:
			
			displayTour(tokyoTourSched);
			break;
		case 1:
			
			displayTour(kyotoTourSched);
			break;
		case 2:
			
			displayTour(osakaTourSched);
			break;
		
	}
}

function createEventListeners() {
	let tokyoShowTours = document.getElementById('tokyoItem');
	let kyotoShowTours = document.getElementById('kyotoItem');
	let osakaShowTours = document.getElementById('osakaItem');
	if (tokyoShowTours.addEventListener) {
		tokyoShowTours.addEventListener('click', function() {setUpTour("Tokyo");}, false);
		kyotoShowTours.addEventListener('click', function() {setUpTour("Kyoto");}, false);
		osakaShowTours.addEventListener('click', function() {setUpTour("Osaka");}, false);
		
	} else if (tokyoShowTours.attachEvent) {
		tokyoShowTours.attachEvent('onclick', function() {setUpTour("Tokyo");});
		kyotoShowTours.attachEvent('onclick', function() {setUpTour("Kyoto");});
		osakaShowTours.attachEvent('onclick', function() {setUpTour("Osaka");});
		
	}
}

//////////////////////////
//		CODE BODY		//
//////////////////////////

// global letiables
let bookingAhead = 6;
let toursPerMonth = 6;
let selectedTour = "";

// create tour schedules for each Location
let tokyoTourSched = generateSchedule("tokyo");
let kyotoTourSched = generateSchedule("kyoto");
let osakaTourSched = generateSchedule("osaka");

// execute functions on page load
if (window.addEventListener) {
	window.addEventListener('load', createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', createEventListeners);
}
