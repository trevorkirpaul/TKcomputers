import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startCreatePreBuiltComputer,
  cleanupNewComputer,
} from '../../../actions/PreBuiltCreator_SUBMIT';
import { Link } from 'react-router-dom';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import Welcome from './steps/Welcome';
import SelectParts from './steps/SelectParts';
import AdditionalOptions from './steps/AdditionalOptions';
import Review from './steps/Review';
import FinalStep from './steps/FinalStep';

const Wrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
`;

export class BuilderStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      open: false,
    };
  }
  // method for redux-form final submit, passed to FinalStep
  handleSubmit = formInfo => {
    this.props.createComputer(formInfo);
    this.setState({ open: true });
  };
  // method for dialog, after completion
  // clean up form state and return to admin page
  handleContinue = () => {
    this.props.cleanUp();
  };

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
        return <Review />;
      default:
        return 'this isnt a  page';
    }
  }
  render() {
    const actions = [
      <Link to="/admin">
        <FlatButton
          label="Continue"
          primary={true}
          onClick={this.handleContinue}
        />
      </Link>,
    ];
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
            <FinalStep goBack={this.handleReset} onSubmit={this.handleSubmit} />
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

        <Dialog
          open={this.state.open}
          title="Success"
          modal={true}
          actions={actions}
        >
          You have successfully added a new pre-built computer to the database.
          Click continue to be returned to your admin page.
        </Dialog>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  createComputer: form => dispatch(startCreatePreBuiltComputer(form)),
  cleanUp: () => dispatch(cleanupNewComputer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuilderStepper);
