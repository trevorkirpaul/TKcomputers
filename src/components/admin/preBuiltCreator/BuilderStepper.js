import React, { Component } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import Welcome from './steps/Welcome';
import SelectParts from './steps/SelectParts';
import AdditionalOptions from './steps/AdditionalOptions';
const Wrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
`;

export default class BuilderStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      computer: {},
    };
  }

  // methods for form on step 2, select parts

  // methods to handle step navigation
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };
  // form methods

  // stepper methods
  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };
  handleReset = () => {
    this.setState({ stepIndex: 0, finished: false });
  };
  handleSetComputer = e => {
    e.preventDefault();
    this.setState({});
  };
  // method to generate content based on step level
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Welcome />;
      case 1:
        return <SelectParts />;
      case 2:
        return <AdditionalOptions />;
      case 3:
        return 'Finally, we will review all the ooptions and if correct submit to the database';
      default:
        return 'this isnt a  page';
    }
  }
  render() {
    const { stepIndex } = this.state;
    return (
      <Wrapper>
        <h3>from builder</h3>

        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Welcome</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Parts</StepLabel>
          </Step>
          <Step>
            <StepLabel>Additional Options</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review</StepLabel>
          </Step>
        </Stepper>

        <div>
          {this.state.finished ? (
            <div>
              <p>complete form</p>
              <FlatButton label="Reset" onClick={this.handleReset} />
            </div>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div className="actions">
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                />
                <FlatButton label="Next" onClick={this.handleNext} />
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}
