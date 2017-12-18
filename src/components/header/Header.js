import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MainNav from './MainNav';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';
import FontIcon from 'material-ui/FontIcon';

// styling

const Wrapper = styled.div`
  background: #383838;
  color: #f7f7f7;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const LogoWrapper = styled.div`
  margin-left: 15px;
`;
const Logo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #f7f7f7;
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
      logOutModalOpen: false,
    };
  }
  handleLogOut = () => {
    this.props.logOut();
    this.setState({ logOutModalOpen: false });
  };
  handleModalOpen = () => {
    this.setState({ logOutModalOpen: true });
  };
  handleModalClose = () => {
    this.setState({ logOutModalOpen: false });
  };

  componentDidMount() {
    this.setState({ auth: this.props.auth });
  }
  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      auth: nextProps.auth,
    }));
  }

  // END OF METHODS AND STATE

  render() {
    const actions = [
      <RaisedButton label="cancel" onClick={this.handleModalClose} />,
      <Link to="/useraction/loggedout">
        <RaisedButton label="Log Out" onClick={this.handleLogOut} />
      </Link>,
    ];
    return (
      <Wrapper>
        <LogoWrapper>
          <FontIcon
            className="fa fa-connectdevelop"
            style={{ color: '#f7f7f7' }}
          />
          <Logo to="/">TKCOMPUTERS</Logo>
        </LogoWrapper>
        <MainNav />
        <SignInWrapper>
          {this.state.auth ? (
            <LoggedIn handleModalOpen={this.handleModalOpen} />
          ) : (
            <NotLoggedIn />
          )}
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
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
