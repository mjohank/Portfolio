// FUNCTION TO TOGGLE DARK MODE

const themeButton = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "resources/Icons/sun.png";
  } else {
    themeIcon.src = "resources/Icons/moon.png";
  }
});
