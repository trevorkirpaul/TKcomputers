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

export class MultiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpus: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const cpus = nextProps.cpus;
    this.setState(() => ({
      cpus,
    }));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={renderTextField}
          label="Pre-Built Name"
          validate={required}
        />
        <Divider />
        <Field name="cpu" component={renderSelectField} label="select a cpu">
          {this.state.cpus.map(cpu => (
            <MenuItem key={cpu._id} value={cpu._id} primaryText={cpu.model} />
          ))}
        </Field>
        <Divider />
        <Field name="gpu" component={renderSelectField} label="select a gpu" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddPreBuilt',
})(MultiForm);
