import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const startButtonRef = document.querySelector('[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      startButtonRef.disabled = true;
    } else {
      startButtonRef.disabled = false;
    }
  },
};

const dataTime = flatpickr(inputRef, options);

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

startButtonRef.addEventListener('click', () => {
  inputRef.disabled = true;
  startButtonRef.disabled = true;
  setInterval(() => {
    const timerId = dataTime.selectedDates[0] - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timerId);

    if (timerId < 1000) {
      clearInterval(timerId);
    } else {
      daysRef.textContent = addLeadingZero(`${days}`);
      hoursRef.textContent = addLeadingZero(`${hours}`);
      minutesRef.textContent = addLeadingZero(`${minutes}`);
      secondsRef.textContent = addLeadingZero(`${seconds}`);
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
