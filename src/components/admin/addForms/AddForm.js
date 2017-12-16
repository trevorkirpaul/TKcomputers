import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

// STYLES

const Panel = styled(Paper)`
  padding: 10px;
  margin-top: 25px;
`;
const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ActionWarning = styled.span`
  color: #e91e63;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`;

const InstructionsPanel = styled(Paper)`
  padding: 5px 15px;
  margin-top: 25px;
  text-align: center;
`;
const Instructions = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  weight: 600;
`;
const WarningIcon = styled(FontIcon)`
  margin-right: 12px !important;

  color: #e91e63 !important;
`;

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
// fxn to render number field
const renderNumField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    type="number"
    floatingLabelText={label}
    hintText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

// field level validation functions
const required = value => (value ? undefined : 'Required');

// fxn to render checkbox field
const renderCheckBox = ({ input, label }) => (
  <Checkbox label={label} checked={!!input.value} onCheck={input.onChange} />
);

export class AddForm extends Component {
  // used when mapping all the items passed down in the
  // 'field' object from parent, aka the input names
  formElementCreator = ele => {
    return (
      <div key={ele}>
        <Field
          name={ele}
          component={renderTextField}
          label={ele}
          validate={[required]}
        />
      </div>
    );
  };
  numElementCreator = ele => {
    return (
      <div key={ele}>
        <Field
          name={ele}
          component={renderNumField}
          label={ele}
          validate={[required]}
        />
      </div>
    );
  };
  checkElementCreator = ele => {
    return (
      <div key={ele}>
        <Field name={ele} component={renderCheckBox} label={ele} />
      </div>
    );
  };
  render() {
    const { handleSubmit, fields, numberFields, boolFields } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <InstructionsPanel zDepth={1}>
          <Instructions>
            <WarningIcon className="fa fa-smile-o" />
            Please complete the following fields then click the 'Add Item'
            button following the final field.
          </Instructions>
        </InstructionsPanel>

        {fields && fields.map(field => this.formElementCreator(field))}

        <InstructionsPanel zDepth={1}>
          <Instructions>
            <WarningIcon className="fa fa-exclamation-triangle" />
            Warning: For the following fields, only enter numbers. Units are not
            accepted.
          </Instructions>
        </InstructionsPanel>

        {numberFields &&
          numberFields.map(field => this.numElementCreator(field))}

        {boolFields && (
          <InstructionsPanel zDepth={1}>
            {boolFields.map(field => this.checkElementCreator(field))}
          </InstructionsPanel>
        )}

        <Panel zDepth={1}>
          <ActionWrapper>
            {this.props.errorStatus && (
              <div>
                <WarningIcon className="fa fa-exclamation-circle" />
                <ActionWarning>{this.props.errorStatus}</ActionWarning>
              </div>
            )}
            <div>
              <RaisedButton secondary={true} label="Add Item" type="submit" />
            </div>
          </ActionWrapper>
        </Panel>
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddPartDB',
})(AddForm);
