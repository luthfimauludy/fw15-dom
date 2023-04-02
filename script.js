// const formName = document.getElementById("name");

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

// const formUsername = document.getElementById("username");

// formUsername.addEventListener("keyup", function (event) {
//   if (event.target.value === "") {
//     document.getElementById("username").style.borderColor = "#c1c5d0";
//   } else {
//     if (!(event.target.value.length > 20)) {
//       document.getElementById("username").style.borderColor = "green";
//     } else {
//       document.getElementById("username").style.borderColor = "red";
//     }
//   }
// });

// const formEmail = document.getElementById("email");

// formEmail.addEventListener("keyup", function (event) {
//   if (event.target.value === "") {
//     document.getElementById("email").style.borderColor = "#c1c5d0";
//   } else {
//     if (!event.target.value.includes("@")) {
//       document.getElementById("email").style.borderColor = "red";
//     } else {
//       document.getElementById("email").style.borderColor = "green";
//     }
//   }
// });

// const formPassword = document.getElementById("password");

// formPassword.addEventListener("keyup", function (event) {
//   if (event.target.value === "") {
//     document.getElementById("password").style.borderColor = "#c1c5d0";
//   } else if (!(event.target.value.length >= 4)) {
//     document.getElementById("password").style.borderColor = "red";
//   } else if (!(event.target.value.length >= 8)) {
//     document.getElementById("password").style.borderColor = "yellow";
//   } else {
//     document.getElementById("password").style.borderColor = "green";
//   }
// });

// const formConfirmPassword = document.getElementById("confirm-password");

// formConfirmPassword.addEventListener("keyup", function (event) {
//   if (event.target.value === "") {
//     document.getElementById("confirm-password").style.borderColor = "#c1c5d0";
//   } else if (!(event.target.value.length >= 8)) {
//     document.getElementById("confirm-password").style.borderColor = "red";
//   } else {
//     document.getElementById("confirm-password").style.borderColor = "green";
//   }
// });

// const formLogin = document.getElementById("login");
// const textAlert = document.getElementById("alert");

// formLogin.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const username = event.target.username.value;
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   if (
//     username === "admin" &&
//     email === "admin@fazztrack.com" &&
//     password === "12345678"
//   ) {
//     window.location = "/index.html";
//   } else {
//     document.getElementById("alert").style.color = "red";
//     textAlert.innerText = "Login Failed!";
//     formLogin.reset();
//   }
// });

// const formSignUp = document.getElementById("signup");

// formSignUp.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const username = event.target.username.value;
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   const confirmPassword = event.target.confirmPassword.value;
//   if (
//     username === "admin" &&
//     email === "admin@fazztrack.com" &&
//     password === "12345678" &&
//     confirmPassword === password
//   ) {
//     window.location = "/signin.html";
//   } else {
//     document.getElementById("alert").style.color = "red";
//     textAlert.innerText = "Login Failed!";
//     formSignUp.reset();
//   }
// });

const menu = document.getElementById("menu");
const btnToggler = document.getElementById("btn-toggler");

btnToggler.addEventListener("click", function () {
  const token = menu.classList;
  if (token.contains("hidden")) {
    token.remove("hidden");
  } else {
    token.add("hidden");
  }
});
