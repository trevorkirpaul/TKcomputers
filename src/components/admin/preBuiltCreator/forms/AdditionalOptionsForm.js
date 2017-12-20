import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

// field level validation functions
const required = value => (value ? undefined : 'Required');

// create custom function to render mat-ui text field inside redux form
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  onChange,
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

// render select field using mat-ui for redux form
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  onChange,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

export class AdditionalOptions extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="price"
          type="number"
          component={renderTextField}
          label="price(overwite)"
          validate={required}
        />
        <Divider />
        <Field
          name="special"
          component={renderSelectField}
          label="special option test"
        >
          <MenuItem value={0} primaryText="option 1" />
          <MenuItem value={1} primaryText="option 2" />
        </Field>
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddPreBuilt',
  destroyOnUnmount: false,
})(AdditionalOptions);
