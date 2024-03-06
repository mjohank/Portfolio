//  CONSTANTS
const menuToggle = document.querySelector(".menu-checkbox");
const navLinks = document.querySelectorAll(".nav-list .nav-link a");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

//FUNCTION TO CLOSE MENU ON LINK CLICK

function closeMenu() {
  menuToggle.checked = false;
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// FUNCTION TO TOGGLE MENU ICONS
function toggleMenuIcons() {
  if (menuToggle.checked) {
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
  } else {
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  }
}

toggleMenuIcons();

// Update icon on change
menuToggle.addEventListener("change", toggleMenuIcons);
