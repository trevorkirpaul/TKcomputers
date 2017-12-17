import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';
import SignIn from './AccountActionForm';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class SignInWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      errorOpen: false,
    };
  }
  handleSubmit = ({ email, password }) => {
    if ((email && password) !== '') {
      this.props.signIn({ email, password });
      // this.props.history.push('/');
    } else {
      this.setState({ open: true });
    }
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleErrorClose = () => {
    this.setState({ errorOpen: false });
  };

  componentWillReceiveProps(nextProps) {
    nextProps.error && this.setState({ errorOpen: true });
    nextProps.auth && this.props.history.push('/');
  }
  render() {
    const actions = [
      <FlatButton
        label="close"
        onClick={this.handleErrorClose}
        secondary={true}
      />,
    ];

    return (
      <div>
        <SignIn
          onSubmit={this.handleSubmit}
          title="Sign In"
          fields={['email']}
          passwordFields={['password']}
        />
        <Snackbar
          open={this.state.open}
          message="Please complete the form"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.errorOpen}
          onRequestClose={this.handleErrorClose}
        >
          {this.props.error}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  auth: state.auth.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: ({ email, password }) => dispatch(signIn({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInWrapper);
