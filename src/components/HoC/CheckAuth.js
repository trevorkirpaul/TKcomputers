import React, { Component } from 'react';
import { connect } from 'react-redux';

const HoC = ({ WrappedComponent, auth }) => {
  return <WrappedComponent {...this.props} auth={auth} />;
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(HoC);
