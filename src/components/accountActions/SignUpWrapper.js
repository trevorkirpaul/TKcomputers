import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './AccountActionForm';
import { signUp } from '../../actions/auth';

export class SignUpWrapper extends Component {
  handleSubmit = ({ email, password, admin = false }) => {
    // this.props.signUp({ email, password });
    if (email !== '' || email !== '') {
      this.props.signUp({ email, password, admin });
    } else {
      // form is already being verified with redux-form
      // TODO: add mor verification here
    }
  };
  componentWillReceiveProps(nextProps) {
    // later change to welcome new user page
    nextProps.auth && this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <SignUp
          onSubmit={this.handleSubmit}
          title="Sign Up"
          fields={['email']}
          passwordFields={['password']}
          boolFields={['admin']}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
});

const mapDispatchToProps = dispatch => ({
  signUp: ({ email, password, admin }) =>
    dispatch(signUp({ email, password, admin })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWrapper);
