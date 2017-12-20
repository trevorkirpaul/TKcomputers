import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import AdditionalOptionsForm from '../forms/AdditionalOptionsForm';

const Wrapper = styled(Paper)`
  padding: 10px;
  margin: 5px;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;

export default () => {
  return (
    <Wrapper>
      <Title>Additonal Options</Title>
      <Divider />
      <AdditionalOptionsForm />
    </Wrapper>
  );
};
