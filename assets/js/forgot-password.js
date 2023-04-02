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

const formForgotPassword = document.getElementById("forgot-password");
const textAlert = document.getElementById("alert");

formForgotPassword.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = event.target.email.value;
  if (email === "admin@fazztrack.com") {
    window.location = "/signin.html";
  } else {
    document.getElementById("alert").style.color = "red";
    document.getElementById("email").style.borderColor = "#c1c5d0";
    textAlert.innerText = "Wrong Email!";
    formForgotPassword.reset();
  }
});
