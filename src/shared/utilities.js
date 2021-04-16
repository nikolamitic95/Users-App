
export const validateEmail = (email) => {

  if (!email) return;
  const valid = /\S+@\S+\.\S+/;
  return valid.test(email);
};

export const loginValidation = (email) => {
  const valid = validateEmail(email);
  if (!email || !valid) {
    return "Email is not valid!";
  }
  const storageEmail = localStorage.getItem("email");
  if (storageEmail === email) {
    return "Welcome!";
  } else if (storageEmail && storageEmail !== email) {
    return "Try different email address!";
  } else {
    localStorage.setItem("email", email);
    return "Account created!";
  }
};


