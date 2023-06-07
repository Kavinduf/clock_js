const hourSpan = document.getElementById("hours");
const minuteSpan = document.getElementById("minutes");
const secondSpan = document.getElementById("seconds");
const amOrpmSpan = document.getElementById("amOrpm");
console.log(hourSpan, minuteSpan, secondSpan, amOrpmSpan);

function changeTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrpm;
  //   console.log(hours, minutes, seconds);
  hourSpan.textContent = hours;
  minuteSpan.textContent = minutes;
  secondSpan.textContent = seconds;

  if (hours >= 0 && hours <= 12) {
    amOrpm = "AM";
  } else {
    amOrpm = "PM";
  }

  amOrpmSpan.textContent = amOrpm;
}
setInterval(changeTime, 1000);
