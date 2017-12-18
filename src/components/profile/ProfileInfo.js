import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;

export default props => {
  return (
    <Wrapper>
      <Title>Details</Title>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.firstName}</p>
    </Wrapper>
  );
};
