//  CONSTANTS
const menuToggle = document.querySelector(".menu-checkbox");
const navLinks = document.querySelectorAll(".nav-list .nav-link a");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// //FUNCTION TO CLOSE MENU ON LINK CLICK AND UPDATE ICONS

function closeMenuAndUpdateIcons() {
  menuToggle.checked = false; // Close the menu
  toggleMenuIcons(); // Update icons based on the new state
}

// FUNCtion TO TOGGLE MENU ICONS
function toggleMenuIcons() {
  if (menuToggle.checked) {
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
  } else {
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  }
}

// Update icon state according to menu visibility
toggleMenuIcons();

// Update icon on checkbox state change
menuToggle.addEventListener("change", toggleMenuIcons);

// Attach the updated close function to nav links
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenuAndUpdateIcons);
});
