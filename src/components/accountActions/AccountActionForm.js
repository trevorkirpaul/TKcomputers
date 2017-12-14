import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';



const Form = styled.form`

`
const HeroCard = styled(Paper)`
  max-width: 500px;
  margin: 15px auto;
  padding: 15px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  margin: 5px;
  margin-bottom: 15px;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 300;
  font-size: 3em;
`;
const HeroSubTitle = styled.h2`
  margin: 5px;
  margin-bottom: 15px;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;

const FormEle = styled.div``;




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

// redux form validation - CURRENTLY NOT WIRED UP
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

export class SignIn extends Component { 
  formElementCreator = (ele) => {
    return (
      <FormEle key={ele}>
        <Field
          name={ele}
          component={renderTextField}
          label={ele}
        />
      </FormEle>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>

        <HeroCard zDepth={1}>
          <HeroTitle>{this.props.title}</HeroTitle>
          <HeroSubTitle>
            Please enter your credentials here
          </HeroSubTitle>
        </HeroCard>

        <HeroCard zDepth={1}>

          {
            this.props.fields.map((field) => this.formElementCreator(field))
          }
          
        </HeroCard>

        <HeroCard>
          <RaisedButton
            label={this.props.title}
            type="submit"
          />
        </HeroCard>
      </Form>
    )
  }
}



export default reduxForm({
  form: 'SignIn',
  validate
})(SignIn);