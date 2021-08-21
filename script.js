const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElement = document.getElementById('date-picker');
const countdownElement = document.getElementById('countdown');
const countdownTitleElement = document.getElementById('countdown-title');
const countdownButtonElement = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Populate countdown 

const updateDOM = () => {
  const now = new Date().getTime();
  const distance = countdownValue - now;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  // Populate Countdown
  countdownTitleElement.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  // Hide Input Container
  inputContainer.hidden = true;
  // Show Countdown
  countdownElement.hidden = false;
}

// Take Values from Form Input
const updateCountdown = (evt) => {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;
  countdownValue = new Date(countdownDate).getTime();
  updateDOM();
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
