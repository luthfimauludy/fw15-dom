const formUsername = document.getElementById("username");

formUsername.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("username").style.borderColor = "#c1c5d0";
  } else {
    if (!(event.target.value.length > 20)) {
      document.getElementById("username").style.borderColor = "green";
    } else {
      document.getElementById("username").style.borderColor = "red";
    }
  }
});

const formEmail = document.getElementById("email");

formEmail.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("email").style.borderColor = "#c1c5d0";
  } else {
    if (!event.target.value.includes("@")) {
      document.getElementById("email").style.borderColor = "red";
    } else {
      document.getElementById("email").style.borderColor = "green";
    }
  }
});

const formPassword = document.getElementById("password");

formPassword.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("password").style.borderColor = "#c1c5d0";
  } else if (!(event.target.value.length >= 8)) {
    document.getElementById("password").style.borderColor = "red";
  } else {
    document.getElementById("password").style.borderColor = "green";
  }
});

const formLogin = document.getElementById("login");
const textAlert = document.getElementById("alert");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (
    username === "admin" &&
    email === "admin@fazztrack.com" &&
    password === "12341234"
  ) {
    window.location = "/index.html";
  } else {
    document.getElementById("alert").style.color = "red";
    document.getElementById("username").style.borderColor = "#c1c5d0";
    document.getElementById("email").style.borderColor = "#c1c5d0";
    document.getElementById("password").style.borderColor = "#c1c5d0";
    textAlert.innerText = "Login Failed!";
    formLogin.reset();
  }
});
