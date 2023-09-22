const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const newYear = new Date("Jan 1, 2024 00:00:00").getTime();

function countDown() {
  const now = new Date().getTime();

  const difference = newYear - now;
  
  const daysVal = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursVal = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutesVal = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  const secondsVal = Math.floor(difference % (1000 * 60)/ (1000));
  
  days.textContent = daysVal;
  hours.textContent = hoursVal;
  minutes.textContent = minutesVal;
  seconds.textContent = secondsVal;
}

setInterval(countDown, 1000);