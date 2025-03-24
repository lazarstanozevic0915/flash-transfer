export const validateSignIn = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateSignUp = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.countryName) {
    errors.countryName = "Location is required";
  }

  return errors;
};

export const validateNewContact = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Mobile number is required";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  if (!values.streetAddress) {
    errors.streetAddress = "Street address is required";
  }

  if (!values.city) {
    errors.city = "City is required";
  }

  if (!values.state) {
    errors.state = "State is required";
  }

  if (!values.zipCode) {
    errors.zipCode = "zipCode code is required";
  }

  if (!values.purpose) {
    errors.purpose = "Purpose is required";
  }

  if (!values.sourceOfFunds) {
    errors.sourceOfFunds = "sourceOfFunds is required";
  }


  return errors;
}
