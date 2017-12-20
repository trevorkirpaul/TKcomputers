import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuilderStepper from './BuilderStepper';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import { startGetCpus } from '../../../actions/PreBuiltCreator';

const TitleWrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h1`
  color: #383838;
  font-weight: 300;
  font-size: 1.8em;
`;
export class PreBuiltCreator extends Component {
  componentDidMount() {
    this.props.getCpus();
  }
  render() {
    return (
      <div>
        <TitleWrapper>
          <Title>Pre-Built Creator</Title>
        </TitleWrapper>
        <BuilderStepper />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCpus: () => dispatch(startGetCpus()),
});

export default connect(null, mapDispatchToProps)(PreBuiltCreator);
