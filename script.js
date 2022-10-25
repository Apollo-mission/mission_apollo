function countDays() {
  const initialDate = new Date(2022, 9, 17); 
  const now = Date.now();
  const difference = now - initialDate;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysSince = Math.floor(difference / millisecondsPerDay);

  const selectTime = document.getElementById('elapsed-time');
  if (selectTime === null) {
    clearInterval(countDown);
    return;
  }
  else {
    console.log(selectTime);
    selectTime.textContent = daysSince;
  }
  
}



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

  function hideRocket() {
    const selectMainContainer = document.querySelector('.stats-container');
    const selectRocket = document.querySelector('.take-off-rocket');
    console.log(selectRocket);
    if(selectRocket === null) {
      return;
    }
    else {
      
      setTimeout(() => selectRocket.style.display='none', 4000);
      setTimeout(() => selectMainContainer.style.overflowY = 'scroll', 4000)
    }
  }

  function init() {
    countDays();
    hideRocket();
  }

  init();