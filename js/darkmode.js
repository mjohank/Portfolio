// FUNCTION TO TOGGLE DARK MODE ON/OFF

const themeButton = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

// Check if the user has a preference stored in localStorage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Set the theme based on the user's preference
if (isDarkMode) {
  document.body.classList.add("dark-mode");
  themeIcon.src = "resources/Icons/sun.png";
} else {
  document.body.classList.remove("dark-mode");
  themeIcon.src = "resources/Icons/moon.png";
}

// Toggle dark mode and update localStorage
themeButton.addEventListener("click", function () {
  const currentMode = document.body.classList.contains("dark-mode");
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", !currentMode);

  if (currentMode) {
    themeIcon.src = "resources/Icons/moon.png";
  } else {
    themeIcon.src = "resources/Icons/sun.png";
  }
});
