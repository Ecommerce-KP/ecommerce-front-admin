export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "Please enter a valid email address",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
  pattern: {
    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Password must include at least one uppercase letter, one number, and one special character",
  },
};
