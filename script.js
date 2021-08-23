const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElement = document.getElementById('date-picker');

const countdownElement = document.getElementById('countdown');
const countdownTitleElement = document.getElementById('countdown-title');
const countdownButton = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeElement = document.getElementById('complete');
const completeElementInfo = document.getElementById('complete-info');
const completeButton = document.getElementById('complete-button');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Populate countdown 

const updateDOM = () => {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // Hide Input Container
    inputContainer.hidden = true;

    // If the countdown has ended, show complete
    if (distance < 0) {
      countdownElement.hidden = true;
      clearInterval(countdownActive);
      completeElementInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
      completeElement.hidden = false;
    } else {
    // Populate Countdown
    countdownTitleElement.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Show Countdown
    countdownElement.hidden = false;   
    completeElement.hidden = true;   
    }

  }, second);
}

// Take Values from Form Input
const updateCountdown = (evt) => {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;
  // Check for valid date
  if (countdownDate === '') {
    alert('Please select a date for the countdown');
  } else {
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}

// Reset Values
const reset = () => {
  countdownElement.hidden = true;
  completeElement.hidden = true;
  inputContainer.hidden = false;
  
  clearInterval(countdownActive);
  countdownTitle = '';
  countdownDate = '';
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
countdownButton.addEventListener('click', reset);
completeButton.addEventListener('click', reset);
