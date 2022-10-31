function animateValue(id, start, end, duration) {
  const checkPage = document.querySelector('.apollo-title');

  if (start === end || checkPage === null) return;
  let range = end - start;
  let current = start;
  let increment = end > start? 10 : -10;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

const checkPage = document.querySelector('.apollo-title');

function animateValueB(id, start, end, duration) {

  if (start === end || checkPage === null) return;
  let range = end - start;
  let current = start;
  let increment = end > start? 10 : -10;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}


const countDownDate = new Date(2023, 0, 26).getTime();

const countDown = setInterval(function() {
  if (checkPage === null) return;

    const now = new Date().getTime();
  
    const distance = countDownDate - now;
  
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
    
    if(selectRocket === null) {
      return;
    }
    else {
      
      setTimeout(() => selectRocket.style.display='none', 4000);
      setTimeout(() => selectMainContainer.style.overflowY = 'scroll', 4000)
    }
  }

  let time = 1;
  
  function timer() {
    if (checkPage === null) return;

    if (time >= 29) {
      clearInterval(interval);
      return;
    }
    time++;
    console.log(time);

    const selectCharacter = document.querySelector(`.black-box:nth-child(${time.toString()}) span`);
    selectCharacter.style.opacity = "1";
    selectCharacter.style.transform = "translateY(0px)";
  }


  const interval = setInterval(timer, 300);

  function init() {
    animateValue("amount", 0, 6020, 5000);
    animateValueB("amountB", 0, 5920, 5000);
    hideRocket();
  }

  init();
