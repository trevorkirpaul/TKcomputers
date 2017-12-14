import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 


import TextField from 'material-ui/TextField';


export const renderTextField = ({
  input,
  label,
  meta: {touched, error},
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

export const formElementCreator = (ele) => {
  return (
    <div key={ele}>
      <Field
        name={ele}
        component={renderTextField}
        label={ele}
      />
    </div>
  );
}

// redux form validation
export const validate = values => {
  const errors = {};
  const requiredFields = [
    'email',
    'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]){
      errors[field] = 'Required'
    }
  })

  return errors
}