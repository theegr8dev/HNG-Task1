const currentDayEl = document.querySelector('.current-day');
const utcEl = document.querySelector('.utc');
const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay();

const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const currentDayName = daysOfWeek[currentDayOfWeek];
const currentUTCTime = currentDate.toUTCString();

currentDayEl.innerHTML += currentDayName;
utcEl.innerHTML += currentUTCTime;
