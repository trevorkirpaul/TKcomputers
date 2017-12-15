import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  startAddSSD,
  startAddCase,
  startAddCPU,
  startAddGPU,
} from '../../actions/parts';
import AddButton from './AddButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
    this.setState({ modal: '' });
  };
  handleSubmitCPU = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    }

    this.props.addCPU(fields);
    this.setState({ modal: '', error: '' });
  };
  handleSubmitSSD = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    }
    this.props.addSSD(fields);
    this.setState({ modal: '', error: '' });
    // console.log(fields);
  };
  handleSubmitCompCase = fields => {
    const check = checkFields(fields);
    if (check === false) {
      return this.setState({ error: 'Please complete the form' });
    } else {
      this.props.addCase(fields);
      this.setState({ modal: '' });
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
          ]}
          errorStatus={this.state.error}
        />
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addSSD: fields => dispatch(startAddSSD(fields)),
  addCase: fields => dispatch(startAddCase(fields)),
  addCPU: fields => dispatch(startAddCPU(fields)),
  addGPU: fields => dispatch(startAddGPU(fields)),
});

export default connect(null, mapDispatchToProps)(AddItemButton);
