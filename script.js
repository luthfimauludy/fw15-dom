const formLogin = document.getElementById("login");
const formSignUp = document.getElementById("signup");
const textAlert = document.getElementById("alert");
const formUsername = document.getElementById("username");
const formEmail = document.getElementById("email");
const formPassword = document.getElementById("password");
const formConfirmPassword = document.getElementById("confirmPassword");

// formName.addEventListener("keyup", function (event) {
//   if (event.target.value === "") {
//     document.getElementById("name").style.borderColor = "#c1c5d0";
//   } else {
//     if (!(event.target.value.length >= 20)) {
//       document.getElementById("name").style.borderColor = "green";
//     } else {
//       document.getElementById("name").style.borderColor = "red";
//     }
//   }
// });

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

formPassword.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("password").style.borderColor = "#c1c5d0";
  } else if (!(event.target.value.length >= 4)) {
    document.getElementById("password").style.borderColor = "red";
  } else if (!(event.target.value.length >= 8)) {
    document.getElementById("password").style.borderColor = "yellow";
  } else {
    document.getElementById("password").style.borderColor = "green";
  }
});

formConfirmPassword.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("confirmPassword").style.borderColor = "#c1c5d0";
  } else if (!(event.target.value.length >= 8)) {
    document.getElementById("confirmPassword").style.borderColor = "red";
  } else {
    document.getElementById("confirmPassword").style.borderColor = "green";
  }
});

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (
    username === "admin" &&
    email === "admin@fazztrack.com" &&
    password === "12345678"
  ) {
    window.location = "/index.html";
  } else {
    document.getElementById("alert").style.color = "red";
    textAlert.innerText = "Login Failed!";
    formLogin.reset();
  }
});

formSignUp.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;
  if (
    username === "admin" &&
    email === "admin@fazztrack.com" &&
    password === "12345678" &&
    confirmPassword === password
  ) {
    window.location = "/signin.html";
  } else {
    document.getElementById("alert").style.color = "red";
    textAlert.innerText = "Login Failed!";
    formSignUp.reset();
  }
});
