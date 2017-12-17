import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './AccountActionForm';
import { signUp } from '../../actions/auth';

export class SignUpWrapper extends Component {
  handleSubmit = ({ email, password }) => {
    this.props.signUp({ email, password });
  };
  render() {
    return (
      <div>
        <SignUp
          onSubmit={this.handleSubmit}
          title="Sign Up"
          fields={['email']}
          passwordFields={['password']}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: ({ email, password }) => dispatch(signUp({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignUpWrapper);
