const formLogin = document.getElementById("login");
const textAlert = document.getElementById("alert");
const btnWrapper = document.getElementById("buttonWrapper");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (
    username === "admin" &&
    email === "admin@fazztrack.com" &&
    password === "1234"
  ) {
    document.getElementById("buttonWrapper").formAction = "/index.html";
  } else {
    document.getElementById("alert").style.color = "red";
    textAlert.innerText = "Login Failed!";
    formLogin.reset();
  }
});
