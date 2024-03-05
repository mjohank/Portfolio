// EMAIL VALIDATION
export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

//

//CHECK INPUT LENGTH
export function checkLength(value, inputLength) {
  if (value.trim().length > inputLength) {
    return true;
  } else {
    return false;
  }
}
