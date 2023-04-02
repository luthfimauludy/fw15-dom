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
