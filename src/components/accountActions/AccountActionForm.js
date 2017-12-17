import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import SignInButton from './SignInButton';
import Checkbox from 'material-ui/Checkbox';

const Form = styled.form``;
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

// field level validation function
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

// fxn to render checkbox field
const renderCheckBox = ({ input, label }) => (
  <Checkbox label={label} checked={!!input.value} onCheck={input.onChange} />
);

export class SignIn extends Component {
  formElementCreator = ele => {
    return (
      <FormEle key={ele}>
        <Field
          name={ele}
          component={renderTextField}
          label={ele}
          validate={required}
        />
      </FormEle>
    );
  };
  passwordElementCreator = ele => {
    return (
      <FormEle key={ele}>
        <Field
          name={ele}
          component={renderTextField}
          label={ele}
          validate={required}
          type="password"
        />
      </FormEle>
    );
  };
  checkElementCreator = ele => {
    return (
      <FormEle key={ele}>
        <Field name={ele} component={renderCheckBox} label={ele} />
      </FormEle>
    );
  };
  render() {
    const {
      handleSubmit,
      fields,
      passwordFields,
      boolFields = [],
    } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <HeroCard zDepth={1}>
          <HeroTitle>{this.props.title}</HeroTitle>
          <HeroSubTitle>Please enter your credentials here</HeroSubTitle>
        </HeroCard>

        <HeroCard zDepth={1}>
          {fields.map(field => this.formElementCreator(field))}
          {passwordFields.map(field => this.passwordElementCreator(field))}
        </HeroCard>
        {boolFields.length > 0 && (
          <HeroCard>
            {boolFields.map(field => this.checkElementCreator(field))}
          </HeroCard>
        )}
        <HeroCard>
          <SignInButton label={this.props.title} />
        </HeroCard>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'SignIn',
})(SignIn);
