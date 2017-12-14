import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import styled from 'styled-components';

import { connect } from 'react-redux';
import { startAddSSD, startAddCase } from '../../actions/partsCPU';
import AddButton from './AddButton';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;


export class AddItemButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      CPU: false,
      modal: ''
    }
  }
  handleSubmitSSD = ({...fields}) => {
    this.props.addSSD(fields);
    this.setState({modal: ''})
    // console.log(fields);
  }
  handleSubmitCompCase = ({...fields}) => {
    this.props.addCase(fields);
    this.setState({modal: ''})
  }
  handleClose = () => {
    this.setState({ modal: '' })
  }
  handleOpen = e => {
    const value = e.target.innerHTML;
    this.setState({
      modal: value
    })
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose}
      />
    ]
    return (
    <Wrapper>     
        <AddButton
            label='SSD'
            onClick={this.handleOpen}
            title="Add SSD"
            actions={actions}
            modal={true}
            open={this.state.modal === 'SSD'}
            autoScrollBodyContent={true}
            onSubmit={this.handleSubmitSSD}
            fields={[
              'brand',
              'model',
              'capacity',
              'price',
              'write',
              'read',
              'imagePath'
            ]}
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
              'price',
              'sidPanel',
              'imagePath',
              'weight' 
            ]}
        />
    </Wrapper>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addSSD: (fields) => dispatch(startAddSSD(fields)),
  addCase: (fields) => dispatch(startAddCase(fields)),
})

export default connect(null, mapDispatchToProps)(AddItemButton);