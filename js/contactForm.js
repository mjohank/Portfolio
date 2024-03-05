// IMPORTS
import { checkLength } from "./utility-scripts/formValidation.js";
import { validateEmail } from "./utility-scripts/formValidation.js";

//CONSTANTS
const contactForm = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameFeedback = document.getElementById("name-feedback");
const emailFeedback = document.getElementById("email-feedback");
const messageFeedback = document.getElementById("message-feedback");
const submitButton = document.querySelector(".submit-btn");

//FUNCTION TO VALIDATE FORM
function validateContactForm(event) {
  event.preventDefault();

  if (checkLength(nameInput.value, 2) === true) {
    nameFeedback.innerHTML = "";
    nameFeedback.innerHTML = '<i class="fa-solid fa-check success"></i>';
    nameFeedback.style.display = "inline-block";
  } else {
    nameFeedback.innerHTML = "Please enter at least 3 characters";
    nameFeedback.classList.add("error");
    nameFeedback.style.display = "inline-block";
  }

  if (validateEmail(emailInput.value)) {
    emailFeedback.innerHTML = "";
    emailFeedback.innerHTML = '<i class="fa-solid fa-check success"></i>';
    emailFeedback.style.display = "inline-block";
  } else {
    emailFeedback.innerHTML = "Please enter a valid email format";
    emailFeedback.classList.add("error");
    emailFeedback.style.display = "inline-block";
  }

  if (checkLength(messageInput.value, 19) === true) {
    messageFeedback.innerHTML = "";
    messageFeedback.innerHTML = '<i class="fa-solid fa-check success"></i>';
    messageFeedback.style.display = "inline-block";
  } else {
    messageFeedback.innerHTML = "";
    messageFeedback.innerHTML = "Please enter at least 20 characters";
    messageFeedback.classList.add("error");
    messageFeedback.style.display = "inline-block";
  }

  if (
    checkLength(nameInput.value, 2) &&
    validateEmail(emailInput.value) &&
    checkLength(messageInput.value, 19)
  ) {
    //Form success feedback on submit button
    submitButton.innerHTML = "";
    submitButton.style.color = "#24c224";
    submitButton.innerHTML = `Message sent`;
    submitButton.textContent = submitButton.textContent.toUpperCase();

    //Reset the form
    contactForm.reset();
  }
}

contactForm.addEventListener("submit", validateContactForm);
