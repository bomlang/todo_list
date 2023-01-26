const clock = document.querySelector(".clock");

function watch() {
  const date = new Date();
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  clock.textContent = `${day}일 ${hour} : ${min} : ${sec}`;
}

setInterval(watch, 1000);
