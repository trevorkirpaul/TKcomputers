import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signIn} from '../../actions/auth';
import SignIn from './AccountActionForm';


export class SignInWrapper extends Component {
  handleSubmit = ({email, password}) => {
    this.props.signIn({email, password});
    this.props.history.push('/');
    
  }
  render() {
    return (
      <div>
        
        <SignIn
          onSubmit={this.handleSubmit}
          title="Sign In"
          fields={["email","password"]}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: ({email, password}) => dispatch(signIn({email, password}))
})

export default connect(null, mapDispatchToProps)(SignInWrapper);