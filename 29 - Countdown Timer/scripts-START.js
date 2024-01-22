const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const reset = document.querySelector('.reset');
let countdown;

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  reset.style.display = 'block';
  countdown = setInterval(() => {
    const secondsLeft = Math.floor((then - Date.now()) / 1000);
    secondsLeft < 0 ? clearInterval(countdown) : displayTimeLeft(secondsLeft);
  }, 16)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  document.title = display;
  timerDisplay.textContent = display;
  console.log(minutes, remainderSeconds);
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function startInputTime(e) {
  e.preventDefault();
  const mins = parseInt(this.minutes.value);
  if (mins) {
    timer(mins * 60);
    this.reset();
  }
}

function resetHandler() {
  clearInterval(countdown);
  reset.style.display = 'none';
  timerDisplay.textContent = "";
  endTime.textContent = "";
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', startInputTime);
reset.addEventListener('click', resetHandler)
