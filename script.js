const initialDate = new Date(2022, 9, 17); 
const now = Date.now();
const difference = now - initialDate;
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysSince = Math.floor(difference / millisecondsPerDay);

console.log(difference);
document.getElementById('elapsed-time').textContent = daysSince;



const countDownDate = new Date(2023, 0, 26).getTime();

const countDown = setInterval(function() {

    const now = new Date().getTime();
  
    const distance = countDownDate - now;

    console.log(now);
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.querySelector(".craquages-number").textContent = "J-" + days + ":" + hours + ":"
    + minutes + ":" + seconds;
  
    if (distance < 0) {
      clearInterval(countDown);
      document.querySelector(".craquages-number").textContent = "challenge accompli !";
    }
  }, 1000);