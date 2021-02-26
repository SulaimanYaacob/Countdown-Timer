//15:30
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022'

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const ttlseconds = Math.floor((newYearsDate - currentDate) / 1000);

    const days = Math.floor(ttlseconds / 3600 / 24);
    const hours = Math.floor(ttlseconds / 3600) % 24;
    const mins = Math.floor(ttlseconds / 60) % 60;
    const seconds = Math.floor(ttlseconds) % 60;

   /* console.log(days, hours, mins, seconds); */

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown,1000) 