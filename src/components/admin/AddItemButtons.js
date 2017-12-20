import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  startAddSSD,
  startAddCase,
  startAddCPU,
  startAddGPU,
  startAddHDD,
  startAddKeyboard,
  startAddMouse,
  startAddRAM,
  startAddFan,
} from '../../actions/parts';
import AddButton from './AddButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
`;

// fxn to verify if all fields in submitted form are not empty
const checkFields = fields => {
  const values = Object.entries(fields);
  if (values.length === 0) {
    return false;
  } else {
    return true;
  }
};

export class AddItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CPU: false,
      modal: '',
      error: '',
      snackBarOpen: false,
    };
  }

  handleSubmitGPU = fields => {
    // returns false if there are no form fields
    // or true if at least one field has been filled
    // TODO: enhance this verification
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    }
    this.setState({ error: '' });
    this.props.addGPU(fields);
    this.setState({ modal: '', error: '', snackBarOpen: true });
  };
  handleSubmitCPU = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    }
    this.props.addCPU(fields);
    this.setState({ modal: '', error: '', snackBarOpen: true });
  };
  handleSubmitSSD = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    }
    this.props.addSSD(fields);
    this.setState({ modal: '', error: '', snackBarOpen: true });
  };
  handleSubmitCompCase = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addCase(fields);
      this.setState({ modal: '', error: '', snackBarOpen: true });
    }
  };
  handleSubmitHDD = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addHDD(fields);
      this.setState({ modal: '', error: '', snackBarOpen: true });
    }
  };
  handlSubmitKeyboard = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addKeyboard(fields);
      this.setState({ modal: '', error: '', snackBarOpen: true });
    }
  };
  handleSubmitMouse = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addMouse(fields);
      this.setState({ modal: '', error: '', snackBarOpen: true });
    }
  };
  handleSubmitRam = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addRam(fields);
      this.setState({ modal: '', error: '', snackBarOpen: true });
    }
  };
  handleSubmitFan = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addFan(fields);
      this.setState({ modal: '', error: '', snackBarOpen: true });
    }
  };
  handleClose = () => {
    this.setState({ modal: '', error: '' });
  };
  handleOpen = e => {
    const value = e.target.innerHTML;
    this.setState({
      modal: value,
    });
  };
  handleSnackbarClose = () => {
    this.setState({ snackBarOpen: false });
  };
  render() {
    const actions = [
      <FlatButton label="Cancel" secondary={true} onClick={this.handleClose} />,
    ];
    return (
      <Wrapper>
        <AddButton
          label="SSD"
          onClick={this.handleOpen}
          title="Add SSD"
          actions={actions}
          modal={true}
          open={this.state.modal === 'SSD'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitSSD}
          fields={['brand', 'model', 'imagePath']}
          numberFields={['capacity', 'price', 'write', 'read']}
          errorStatus={this.state.error}
        />
        <AddButton
          label="Computer Case"
          onClick={this.handleOpen}
          title="Add Computer Case"
          actions={actions}
          modal={true}
          open={this.state.modal === 'Computer Case'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitCompCase}
          fields={[
            'brand',
            'model',
            'type',
            'caseMat',
            'moboSupport',
            'color',
            'imagePath',
          ]}
          numberFields={['price', 'weight']}
          boolFields={['sidePanel']}
          errorStatus={this.state.error}
        />
        <AddButton
          label="CPU"
          onClick={this.handleOpen}
          title="Add CPU"
          actions={actions}
          modal={true}
          open={this.state.modal === 'CPU'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitCPU}
          fields={[
            'brand',
            'model',
            'chipset',
            'cpuSeries',
            'memory',
            'socket',
            'imagePath',
          ]}
          numberFields={[
            'operating',
            'max',
            'l3Cache',
            'threads',
            'cores',
            'pciLanes',
          ]}
          errorStatus={this.state.error}
        />
        <AddButton
          label="GPU"
          onClick={this.handleOpen}
          title="Add GPU"
          actions={actions}
          modal={true}
          open={this.state.modal === 'GPU'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitGPU}
          fields={['brand', 'model', 'chipset', 'gpuSeries', 'imagePath']}
          numberFields={[
            'memory',
            'clockSpeed',
            'hdmi',
            'displayPort',
            'dvi',
            'power',
            'slotWidth',
            'price',
          ]}
          errorStatus={this.state.error}
        />
        <AddButton
          label="HDD"
          onClick={this.handleOpen}
          title="Add HDD"
          actions={actions}
          modal={true}
          open={this.state.modal === 'HDD'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitHDD}
          fields={['brand', 'model', 'imagePath']}
          numberFields={['capacity', 'rpm', 'price']}
          errorStatus={this.state.error}
        />
        <AddButton
          label="Keyboard"
          onClick={this.handleOpen}
          title="Add Keyboard"
          actions={actions}
          modal={true}
          open={this.state.modal === 'Keyboard'}
          autoScrollBodyContent={true}
          onSubmit={this.handlSubmitKeyboard}
          fields={['brand', 'model', 'keySwitch', 'color', 'imagePath']}
          numberFields={['price']}
          boolFields={['backlit']}
          errorStatus={this.state.error}
        />
        <AddButton
          label="Mouse"
          onClick={this.handleOpen}
          title="Add Mouse"
          actions={actions}
          modal={true}
          open={this.state.modal === 'Mouse'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitMouse}
          fields={['brand', 'model', 'type', 'gripStyle', 'color', 'imagePath']}
          numberFields={['price']}
          errorStatus={this.state.error}
        />
        <AddButton
          label="RAM"
          onClick={this.handleOpen}
          title="Add RAM"
          actions={actions}
          modal={true}
          open={this.state.modal === 'RAM'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitRam}
          fields={['brand', 'model', 'series', 'type', 'imagePath']}
          numberFields={['capacity', 'speed', 'price']}
          errorStatus={this.state.error}
        />
        <AddButton
          label="Fan"
          onClick={this.handleOpen}
          title="Add Case/CPU Fan"
          actions={actions}
          modal={true}
          open={this.state.modal === 'Fan'}
          autoScrollBodyContent={true}
          onSubmit={this.handleSubmitFan}
          fields={['brand', 'model', 'type', 'imagePath']}
          numberFields={['rpm', 'price']}
          errorStatus={this.state.error}
        />

        <Snackbar
          open={this.state.snackBarOpen}
          message={this.props.message ? this.props.message : 'error'}
          autoHideDuration={4000}
          onRequestClose={this.handleSnackbarClose}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  message: state.adminServer.message,
});

const mapDispatchToProps = dispatch => ({
  addSSD: fields => dispatch(startAddSSD(fields)),
  addCase: fields => dispatch(startAddCase(fields)),
  addCPU: fields => dispatch(startAddCPU(fields)),
  addGPU: fields => dispatch(startAddGPU(fields)),
  addHDD: fields => dispatch(startAddHDD(fields)),
  addKeyboard: fields => dispatch(startAddKeyboard(fields)),
  addMouse: fields => dispatch(startAddMouse(fields)),
  addRam: fields => dispatch(startAddRAM(fields)),
  addFan: fields => dispatch(startAddFan(fields)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);
