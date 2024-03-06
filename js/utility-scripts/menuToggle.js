const menuToggle = document.querySelector(".menu-checkbox");

const navLinks = document.querySelectorAll(".nav-list .nav-link a");

//FUNCTION TO UNCHECK THE MENU TOGGLE

function closeMenu() {
  menuToggle.checked = false;
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
