//////////////////////////
//		FUNCTIONS		//
//////////////////////////

function nextMonth() {
	eraseCalendar();
	switch (monthNum) {
		case 11:
			monthNum = 0;
			++currentYear;
			break;
		default:
			++monthNum;
			break;
	}
	currentMonth = monthsOfYear[monthNum]
	fillCalendar();
	if (selectedTour !== "") {setUpTour(selectedTour);}
}

function lastMonth() {
	eraseCalendar();
	switch (monthNum) {
		case 0:
			monthNum = 11;
			--currentYear;
			break;
		default:
			--monthNum;
			break;
	}
	currentMonth = monthsOfYear[monthNum];
	fillCalendar();
	if (selectedTour !== "") {setUpTour(selectedTour);}
}

function eraseCalendar() {
	let n = 6;
	while (n > 0){
		let weekRow = document.getElementById('week' + n);
		if (weekRow.style.display === "block") {
			for (i = 7; i >= 1; i--) {
				let calDayDiv = document.getElementById('r' + n + 'd' + i);
				calDayDiv.getElementsByTagName('div')[0].innerHTML = "";
				calDayDiv.getElementsByTagName('div')[1].innerHTML = "";
				calDayDiv.getElementsByTagName('div')[1].removeAttribute("class");
				if (calDayDiv.getElementsByTagName('div')[2]) {
					calDayDiv.getElementsByTagName('div')[2].remove();
				}
			}
			weekRow.style.display = 'none';
		}
		n--;
	}
}

function fillCalendar() {

	// determine beginning of current month
	
	let thisMonth = new Date(currentMonth + " 01, " + currentYear);

	// write current month & year above calendar
	document.getElementById('monthEntry').innerHTML = monthsOfYear[thisMonth.getMonth()] + " " + thisMonth.getFullYear();

	// set the day index of the first day of the current month
	let dayOneIs = thisMonth.getDay();
	

	// determine how many days are in the current month
	thisMonth.setDate(32)
	let dayNum = thisMonth.getDate();
	let totalDays;
	switch (dayNum) {
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

	// fill in calendar
	let i = 1;
	let thisDay = dayOneIs;
	let monthDate = 1;
	while (monthDate <= totalDays) {
	    document.getElementById('week' + i).style.display = "block";
	    while (thisDay < 7 && monthDate <= totalDays) {
	        document.getElementById('r' + i + 'd' + (thisDay+1)).getElementsByTagName('div')[0].innerHTML = '<p class="date-number">' + monthDate + '</p>';
	        thisDay++;
	        monthDate++;
	    }
	    thisDay = 0;
	    i++;
	}
}

//////////////////////////
//		CODE BODY		//
//////////////////////////

// set month & day arrays
let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// get current month info & set letiables
let currentDate = new Date();

let monthNum = currentDate.getMonth(); // getMonth() provides number 0-11 for month of the year
let currentMonth = monthsOfYear[monthNum];
let currentYear = currentDate.getFullYear(); // getFullYear() returns the 4-digit year
fillCalendar();
