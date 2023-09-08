const currentDayEl = document.querySelector('.current-day');
const utcEl = document.querySelector('.utc');
const currentDate = new Date();

const currentDayOfWeek = currentDate.getDay();
const currentUTCTime = currentDate.toISOString().slice(0, -5);

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
currentDayEl.innerHTML += currentDayName;
utcEl.innerHTML += currentUTCTime;
