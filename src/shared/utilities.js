
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

export const formFields = (name, email, city, street, companyName, phone, website) => {
  if (name && email && city && street && companyName && phone && website) {
    return true
  } else {
    return false
  }
}

export const validUrl = (website) => {
  let valid = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i');
  return !!valid.test(website);
}

export const phoneValidaton = (phone) => {
  let valid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?a-zA-Z]+/;
  let numeber = phone ? phone.length : null;
  if (!valid.test(phone) || numeber < 10) {
    return false
  } else {
    return true
  }
}
