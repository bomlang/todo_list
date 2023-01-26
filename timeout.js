const timeOut = document.querySelector(".timeOut");

function dDay() {
  const today = new Date();
  const nextYear = new Date("2024-1-1");
  const distance = new Date(nextYear - today);

  const day = Math.floor(distance / (1000 * 3600 * 24));
  const hours = Math.floor((distance / (1000 * 3600)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timeOut.innerText = `${day}일  ${hours}시  ${minutes}분  ${seconds}초`;
}

setInterval(dDay, 1000);
