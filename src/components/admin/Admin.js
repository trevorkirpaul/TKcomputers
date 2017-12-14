import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import AddOS from './AddItem';
import ListItems from './ListItems';
import {startGetCPUs} from '../../actions/partsCPU';



// styling
const Wrapper = styled.div`
  margin: 15px;
`; 

const Title = styled.h1`
  font-size: 3em;
  font-weight: 300;
  color: #383838;
`;



export class Admin extends Component {
  submit = (values) => {
    console.log(values);
  }
  componentDidMount(){
    this.props.getCPUs();
  }
  render() {
    return (
      <Wrapper>
        
        <Title>
          Admin
        </Title>
        <AddOS onSubmit={this.submit}/>
        <ListItems items={this.props.CPUs}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  CPUs: state.partsCPU
})

const mapDispatchToProps = dispatch => ({
  getCPUs: () => dispatch(startGetCPUs())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

