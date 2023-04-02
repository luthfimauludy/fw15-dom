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

const formConfirmPassword = document.getElementById("confirmPassword");

formConfirmPassword.addEventListener("keyup", function (event) {
  if (event.target.value === "") {
    document.getElementById("confirmPassword").style.borderColor = "#c1c5d0";
  } else if (!(event.target.value.length >= 8)) {
    document.getElementById("confirmPassword").style.borderColor = "red";
  } else {
    document.getElementById("confirmPassword").style.borderColor = "green";
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
    document.getElementById("alert").style.color = "red";
    textAlert.innerText = "Data cannot be empty!";
    formSignUp.reset();
  } else {
    if (name === "") {
      document.getElementById("alert").style.color = "red";
      textAlert.innerText = "Name cannot be empty!";
    } else if (email === "") {
      document.getElementById("alert").style.color = "red";
      textAlert.innerText = "Email cannot be empty!";
    } else if (password === "") {
      document.getElementById("alert").style.color = "red";
      textAlert.innerText = "Password cannot be empty!";
    } else if (confirmPassword === "") {
      document.getElementById("alert").style.color = "red";
      textAlert.innerText = "Confirm Password cannot be empty!";
    } else {
      window.location = "/signin.html";
    }
  }
});
