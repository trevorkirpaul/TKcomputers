import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import ViewMoreInfo from './ViewMoreInfo';
const Wrapper = styled.div``;

export default class DBItemViewMore extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleView = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <Wrapper>
        <FlatButton
          onClick={this.handleView}
          label="View"
          style={{ color: '#383838' }}
        />
        <Dialog open={this.state.open} onRequestClose={this.handleView}>
          <div>
            <ViewMoreInfo id={this.props.id} category={this.props.category} />
            <FlatButton
              label="Close"
              onClick={this.handleView}
              style={{ color: '#383838' }}
            />
          </div>
        </Dialog>
      </Wrapper>
    );
  }
}
