const day = document.querySelector(".day h1");
const hour = document.querySelector(".hour h1");
const minute = document.querySelector(".minute h1");
const second = document.querySelector(".second h1");

let intervalId;

const targetDate = new Date("06/06/2025");
const currDate = Date.now();


//extract day,hour,minute,second

let milliseconds = targetDate - currDate;
let secondv = Math.floor(milliseconds / 1000);
let yearv = Math.floor(secondv / (365 * 24 * 60 * 60));
let remainingSeconds = secondv % (365 * 24 * 60 * 60);
let dayv = Math.floor(remainingSeconds / (24 * 60 * 60));
remainingSeconds %= (24 * 60 * 60);
let hourv = Math.floor(remainingSeconds / (60 * 60));
remainingSeconds %= (60 * 60);
let minutev = Math.floor(remainingSeconds / 60);
remainingSeconds %= 60;
let secondsv = remainingSeconds;

// start interval 

intervalId = setInterval(() => {
  if (secondsv == 0) {
    if (minutev == 0) {
      if (hourv == 0) {
        if (dayv == 0) {
          clearInterval(intervalId);
        } else {
          dayv -= 1;
          hour = 59;
        }
      } else {
        hourv -= 1;
        minute = 59;
      }
    } else {
      minutev -= 1;
      secondsv = 59;
    }

  } else {
    secondsv -= 1;
  }

  updateHtml();

}, 1000);

// Updating HTML elements

function updateHtml() {
  day.innerText = (dayv < 10 ? `0${dayv}` : dayv);
  hour.textContent = hourv<10?`0${hourv}`:hourv;
  minute.textContent = minutev<10?`${minutev}`:minutev;
  second.textContent = secondsv<10?`0${secondsv}`:secondsv;
}