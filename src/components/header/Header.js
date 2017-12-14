import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MainNav from './MainNav';

// styling

const Wrapper = styled.div`
  
  background: #383838;
  color: #F7F7F7;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

`;

const Logo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #D0E87A;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  padding: 15px 25px;
  /* background: #D0E87A; */
  
`;

const SignInWrapper = styled.div`
  padding: 0px 15px;
`;


// app



export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      auth: false,
      logOutModalOpen: false
    }
  }
  handleLogOut = () => {
    this.props.logOut();
    this.setState({logOutModalOpen: false});
    this.props.history.push('/');
  }
  handleModalOpen = () => {
    this.setState({logOutModalOpen: true})
  }
  handleModalClose = () => {
    this.setState({logOutModalOpen: false})
  }
  ifNotLogged = () => {
    if (this.state.auth === false) {
      return (       
          <div>
            <Link to="/signin">
              <FlatButton label="Sign In"/>  
            </Link>
            <Link to="/signup">
              <FlatButton label="Sign Up"/>  
            </Link>  
          </div>    
      );
    }
  }
  ifLogged = () => {
    if (this.state.auth === true) {
      return (
        <div>
          <Link to='/admin'>
            <FlatButton
            label='Admin'
            icon={<FontIcon className="fa fa-database" />}
            />
          </Link>          
          <FlatButton
          label='Log Out'
          icon={<FontIcon className="fa fa-sign-out" />}
          onClick={this.handleModalOpen}
          />          
        </div>
      )
    }
  }
  componentDidMount() {
    this.setState(() => ({
      auth: this.props.auth
    }))
  }
  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      auth: nextProps.auth
    }))
  }

  // END OF METHODS AND STATE

  render() {
    const actions = [
      <RaisedButton
        label="cancel"
        onClick={this.handleModalClose}
      />,
      <RaisedButton
        label="Log Out"
        onClick={this.handleLogOut}
      />
    ];
    return (
      <Wrapper>
        
        <Logo to='/'>TKcomputers</Logo> 
        <MainNav />
        <SignInWrapper> 
          {this.ifNotLogged()} 
          {this.ifLogged()}
        </SignInWrapper>
        <Dialog
          title="Log Out"
          open={this.state.logOutModalOpen}
          actions={actions}
          modal={false}
          onRequestClose={this.handleModalClose}
        >
          Are you sure you want to log out?
        </Dialog>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  logOut: () =>  dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);