import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

// STYLES

const Panel = styled(Paper)`
  padding: 10px;
  margin-top: 25px;
  text-align: right;
`;

// REDUX FORM VALIDATE
const validate = values => {
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


// create custom function to render mat-ui text field inside redux form
const renderTextField = ({
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









export class AddForm extends Component {
  // used when mapping all the items passed down in the
  // 'field' object from parent, aka the input names
  formElementCreator = (ele) => {
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
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {
          this.props.fields.map((field) => this.formElementCreator(field))
        }
        <Panel zDepth={1}>
          <RaisedButton secondary={true} label="Add Item" type="submit"/>
        </Panel>
      </form>
    )
  }
}


export default reduxForm({
  form: 'AddPartDB',
  validate
})(AddForm);