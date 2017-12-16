export const validate = values => {
  const errors = {};

  const requiredFields = [];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'required';
    }
  });
  return errors;
};
