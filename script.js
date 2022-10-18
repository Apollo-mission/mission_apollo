const initialDate = new Date(2022, 9, 17); 
const now = Date.now();
const difference = now - initialDate;
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysSince = Math.floor(difference / millisecondsPerDay);

console.log(difference);
document.getElementById('elapsed-time').textContent = daysSince;