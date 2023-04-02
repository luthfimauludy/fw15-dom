const formName = document.getElementById("name");

formName.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("name").style.borderColor = "#c1c5d0";
  } else {
    if (!(event.target.value.length > 20)) {
      document.getElementById("name").style.borderColor = "green";
    } else {
      document.getElementById("name").style.borderColor = "red";
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

const formConfirmPassword = document.getElementById("confirm-password");

formConfirmPassword.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("confirm-password").style.borderColor = "#c1c5d0";
  } else if (!(event.target.value.length >= 8)) {
    document.getElementById("confirm-password").style.borderColor = "red";
  } else {
    document.getElementById("confirm-password").style.borderColor = "green";
  }
});

const formSignUp = document.getElementById("signup");
const textAlert = document.getElementById("alert");

formSignUp.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;
  if (
    name === "" &&
    email === "" &&
    password === "" &&
    confirmPassword === ""
  ) {
    window.location = "/signin.html";
  } else {
    document.getElementById("alert").style.color = "red";
    document.getElementById("name").style.borderColor = "#c1c5d0";
    document.getElementById("email").style.borderColor = "#c1c5d0";
    document.getElementById("password").style.borderColor = "#c1c5d0";
    document.getElementById("confirm-password").style.borderColor = "#c1c5d0";
    textAlert.innerText = "Login Failed!";
    formSignUp.reset();
  }
});
