import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

let timerId = null;
let selectedTime;

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
  body: document.querySelector('body'),
  timer: document.querySelector('.timer'),
}

const { inputDate, startBtn, dataDays, dataHours, dataMinutes, dataSeconds, body, timer} = refs;
body.setAttribute('style', 'background-color: pink; font-weight: bold; font-size: 30px; text-align: center; max-width: 1500px; margin: auto;');
timer.setAttribute('style', 'display: flex; justify-content: space-around; align-items: center; padding: 50px; margin-top: 100px; border: 5px solid black; border-radius: 10px;');
startBtn.setAttribute('style', 'padding: 5px 50px; margin-left: auto; margin-right: auto; color: white; font-weight: 700; font-size: 20px; line-height: 1.88; text-align: center; background-color: black; border: 0px solid transparent; border-radius: 5px; cursor: pointer;');

startBtn.addEventListener('click', onStartTimer);
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    const isInvalidTime = selectedTime < Date.now();

    if (isInvalidTime) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Chosed correct date');
      startBtn.disabled = false;
    };
  },
};

flatpickr(inputDate, options);

function onStartTimer() {
  timerId = setInterval(() => {
    if (selectedTime - Date.now() <= 0) {
      clearInterval(timerId);
      return;
    }
    const currentTime = convertMs(selectedTime - Date.now());
    console.log();
    updateCurrentTime(currentTime);
  }, 1000)

  startBtn.disabled = true;
  inputDate.disabled = true;
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function updateCurrentTime({ days, hours, minutes, seconds }) {
  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMinutes.textContent = minutes;
  dataSeconds.textContent = seconds;
};