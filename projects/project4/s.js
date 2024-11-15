let startStop = document.querySelector("#startStop");
const resetbtn = document.querySelector("#resetbtn");
let seconds = 0;
let minutes = 0;
let hours = 0;

// leading vars
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

// variable set interval

let timerIntervel = null;
let timerStatus = "stopped";

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }

  if (minutes < 10) {
    leadingminutes = "0" + minutes.toString();
  } else {
    leadingminutes = minutes;
  }

  if (hours < 10) {
    leadinghours = "0" + hours.toString();
  } else {
    leadinghours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerHTML =
    leadinghours + ":" + leadingminutes + ":" + leadingseconds);
}

// window.setInterval(stopWatch, 1000);
startStop.addEventListener("click", () => {
  if (timerStatus == "stopped") {
    timerIntervel = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStop"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause" ></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerIntervel);
    document.getElementById(
      "startStop"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause" ></i>`;
    timerStatus = "stopped";
  }
});

resetbtn.addEventListener("click",()=>{
    window.clearInterval(timerIntervel)
    seconds =0;
    hours=0;
    minutes = 0;

    document.getElementById('timer').innerHTML ="00:00:00"
})