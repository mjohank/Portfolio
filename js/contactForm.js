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

// FUNCTION TO VALIDATE NAME LENGTH + ERROR HANDLING
function validateName() {
  if (checkLength(nameInput.value, 2)) {
    nameFeedback.innerHTML = '<i class="fa-solid fa-check success"></i>';
    nameFeedback.style.display = "inline-block";
  } else {
    nameFeedback.innerHTML = "Please enter at least 3 characters";
    nameFeedback.classList.add("error");
    nameFeedback.style.display = "inline-block";
  }
}

//FUNCTION TO VALIDATE EMAIL FORMAT + ERROR HANDLING
function validateEmailInput() {
  if (validateEmail(emailInput.value)) {
    emailFeedback.innerHTML = '<i class="fa-solid fa-check success"></i>';
    emailFeedback.style.display = "inline-block";
  } else {
    emailFeedback.innerHTML = "Please enter a valid email format";
    emailFeedback.classList.add("error");
    emailFeedback.style.display = "inline-block";
  }
}

//FUNCTION TO VALIDATE MESSAGE LENGTH + ERROR HANDLING
function validateMessage() {
  if (checkLength(messageInput.value, 19)) {
    messageFeedback.innerHTML = '<i class="fa-solid fa-check success"></i>';
    messageFeedback.style.display = "inline-block";
  } else {
    messageFeedback.innerHTML = "Please enter at least 20 characters";
    messageFeedback.classList.add("error");
    messageFeedback.style.display = "inline-block";
  }
}

//ADDING BLUR EVENT LISTENER FOR IMMEDIATE VALIDATION
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmailInput);
messageInput.addEventListener("blur", validateMessage);

// FUNCTION TO HANDLE ALL VALIDATIONS
function validateContactForm(event) {
  // event.preventDefault();

  // Calling validation functions
  validateName();
  validateEmailInput();
  validateMessage();

  // Checking if all validations are successful, then proceed
  if (
    checkLength(nameInput.value, 2) &&
    validateEmail(emailInput.value) &&
    checkLength(messageInput.value, 19)
  ) {
    submitButton.innerHTML = "Message sent";
    submitButton.style.color = "#24c224";
    submitButton.textContent = submitButton.textContent.toUpperCase();
  }
}

contactForm.addEventListener("submit", validateContactForm);
