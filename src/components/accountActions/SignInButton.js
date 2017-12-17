import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

const SignInButton = ({ label, loading }) => {
  if (loading !== true) {
    return <RaisedButton label={label} type="submit" />;
  } else {
    return <CircularProgress />;
  }
};
const mapStateToProps = state => ({
  loading: state.auth.loading,
});
export default connect(mapStateToProps)(SignInButton);
