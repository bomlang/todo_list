const user = document.querySelector(".user h2");
const account = document.querySelector("#account");
const username = document.querySelector("#username");
const loginForm = document.querySelector("#loginForm");

function login(event) {
  event.preventDefault();
  const name = username.value;
  localStorage.setItem("username", name);
  account.innerText = name;
  console.log(name);
}

loginForm.addEventListener("submit", login);
