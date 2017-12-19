import React, { Component } from 'react';
import BuilderStepper from './BuilderStepper';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

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
export default class PreBuiltCreator extends Component {
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
