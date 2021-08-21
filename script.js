const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElement = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
console.log(countdownValue)
// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

// Take Values from Form Input
const updateCountdown = (evt) => {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;
  countdownValue = new Date(countdownDate).getTime();
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);
