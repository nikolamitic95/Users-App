
export const validateEmail = (email) => {

  if (!email) return;
  const valid = /\S+@\S+\.\S+/;
  return valid.test(email);
};




