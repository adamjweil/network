const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email Required";
  }
  if (!values.password) {
    errors.password = "Password Required";
  }
  return errors;
};

export default validate;
