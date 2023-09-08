const currentDayEl = document.querySelector('.current-day');
const utcEl = document.querySelector('.utc');
const currentDate = new Date();

const currentDayOfWeek = currentDate.getDay();
const currentDayName = daysOfWeek[currentDayOfWeek];
const currentUTCTime = currentDate.toUTCString();

const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

currentDayEl.innerHTML += currentDayName;
utcEl.innerHTML += currentUTCTime.slice(0, -4);
