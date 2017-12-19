import React, { Component } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

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
    };
  }
  // methods to handle step navigation
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };
  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };
  handleReset = () => {
    this.setState({ stepIndex: 0, finished: false });
  };
  // method to generate content based on step level
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Welcome to the PreBuilt creator!';
      case 1:
        return 'Select parts for the final build';
      case 2:
        return 'Here we will set the overall package details and values';
      case 3:
        return 'Finally, we will review all the ooptions and if correct submit to teh database';
      default:
        return 'this isnt a  page';
    }
  }
  render() {
    return (
      <Wrapper>
        <h3>from builder</h3>

        <Stepper activeStep={this.state.stepIndex}>
          <Step>
            <StepLabel>Welcome</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Parts</StepLabel>
          </Step>
          <Step>
            <StepLabel>Package Options</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review and submit</StepLabel>
          </Step>
        </Stepper>

        <div>
          {this.state.finished ? (
            <div>
              <p>complete form</p>
              <FlatButton label="Reset" onClick={this.handleReset} />
            </div>
          ) : (
            <div className="messages">
              <p>{this.getStepContent(this.state.stepIndex)}</p>
              <div className="actions">
                <FlatButton
                  label="Back"
                  disabled={this.state.stepIndex === 0}
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
