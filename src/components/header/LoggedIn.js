import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const Button = styled(FlatButton)`
  color: #f7f7f7 !important;
`;

export default class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
  handleSignOut = cb => {
    this.setState({ open: false });
    cb();
  };

  render() {
    return (
      <div>
        <Button
          label="Trevor"
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
      </div>
    );
  }
}
