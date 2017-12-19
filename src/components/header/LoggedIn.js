import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile/profile';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(FlatButton)`
  color: #f7f7f7 !important;
`;

export class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      cartOpen: false,
      firstName: '',
    };
  }
  handleClick = e => {
    e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  handleCartOpen = e => {
    e.preventDefault();
    this.setState({
      cartOpen: true,
      anchorEl: e.currentTarget,
    });
  };
  handleCartClose = () => {
    this.setState({ cartOpen: false });
  };
  handleSignOut = cb => {
    this.setState({ open: false });
    cb();
  };
  componentDidMount() {
    this.props.getProfileDetails(this.props.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      firstName: nextProps.firstName,
    }));
  }
  render() {
    return (
      <Wrapper>
        <div>
          <IconButton
            iconStyle={{ color: '#f8f8f8' }}
            onClick={this.handleCartOpen}
            tooltip="Shopping Cart"
          >
            <FontIcon className="fa fa-shopping-cart" />
          </IconButton>
        </div>
        <Popover
          open={this.state.cartOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleCartClose}
        >
          <Menu>
            <Link to="/cart">
              <MenuItem onClick={this.handleCartClose} primaryText="Items" />
            </Link>
          </Menu>
        </Popover>

        <Button
          label={this.props.profile.firstName}
          labelPosition="after"
          icon={<Avatar size={25}>Tk</Avatar>}
          onClick={this.handleClick}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <Link to="/admin">
              <MenuItem
                rightIcon={<FontIcon className="fa fa-database" />}
                primaryText="Admin"
                onClick={this.handleRequestClose}
              />
            </Link>
            <Link to="/profile">
              <MenuItem
                rightIcon={<FontIcon className="fa fa-user" />}
                primaryText="Profile"
                onClick={this.handleRequestClose}
              />
            </Link>
            <MenuItem
              rightIcon={<FontIcon className="fa fa-sign-out" />}
              primaryText="Sign Out"
              onClick={() => this.handleSignOut(this.props.handleModalOpen)}
            />
          </Menu>
        </Popover>
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getProfileDetails: id => dispatch(getProfile(id)),
});

const mapStateToProps = state => ({
  id: state.auth.userID,
  profile: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
