import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import Snackbar from 'material-ui/Snackbar';
import { startRemovePart } from '../../../actions/remove';

const Wrapper = styled.div``;
const Warning = styled.p`
  color: red;
  font-size: 1.3em;
`;

export class DBItemViewMore extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, snackBar: false };
  }
  handleView = () => {
    this.setState({ open: !this.state.open });
  };
  handleRequestClose = () => {
    this.setState({snackBar: false})
  }
  removePart = () => {
    const id = this.props.id;
    const category = this.props.category;
    // console.log(id, category);
    this.props.removePart(id, category);
    this.setState({ open: false, snackBar:true });
  };
  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleView} />,
      <FlatButton
        onClick={this.removePart}
        label="Remove from DB"
        secondary={true}
      />,
    ];
    return (
      <Wrapper>
        <FlatButton
          onClick={this.handleView}
          label="remove"
          style={{ color: '#383838' }}
        />
        <Dialog
          title="Remove part from database?"
          open={this.state.open}
          onRequestClose={this.handleView}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          actions={actions}
        >
          <div>
            <Warning>This action is permanent and cannot be undone.</Warning>
          </div>
        </Dialog>
        <Snackbar
          open={this.state.snackBar}
          message="Part removed from database"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removePart: (id, category) => dispatch(startRemovePart(id, category)),
});

export default connect(null, mapDispatchToProps)(DBItemViewMore);
