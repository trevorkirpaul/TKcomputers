import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './AccountActionForm';
import { signUp } from '../../actions/auth';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class SignUpWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      open: false,
    };
  }
  handleSubmit = ({ email, password, admin = false }) => {
    // this.props.signUp({ email, password });
    if (email !== '' || email !== '') {
      this.props.signUp({ email, password, admin });
    } else {
      // form is already being verified with redux-form
      // TODO: add mor verification here
    }
  };
  handleErrorClose = () => {
    this.setState({ open: false });
  };
  componentWillReceiveProps(nextProps) {
    // later change to welcome new user page
    nextProps.auth && this.props.history.push('/');
    nextProps.errorMessage &&
      this.setState(() => ({
        error: nextProps.errorMessage,
        open: true,
      }));
  }
  render() {
    const actions = [
      <FlatButton
        label="okay"
        onClick={this.handleErrorClose}
        secondary={true}
      />,
    ];
    return (
      <div>
        <SignUp
          onSubmit={this.handleSubmit}
          title="Sign Up"
          fields={['email']}
          passwordFields={['password']}
          boolFields={['admin']}
        />
        <Dialog
          actions={actions}
          modale={false}
          open={this.state.open}
          onRequestClose={this.handleErrorClose}
        >
          {this.state.error}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
  errorMessage: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  signUp: ({ email, password, admin }) =>
    dispatch(signUp({ email, password, admin })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWrapper);
