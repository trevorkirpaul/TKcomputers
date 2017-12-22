import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const LI = styled.li`
  flex: 30%;
  min-height: 170px;
  margin: 5px;
`;
const Wrapper = styled(Paper)`
  padding: 5px 10px;
  margin: 0px;
  height: 100%;
`;
const Title = styled.h3`
  font-size: 1.2em;
  color: #383838;
  font-weight: 300;
`;

export default ({ part, price, model, brand }) => {
  return (
    <LI>
      <Wrapper>
        <Title>{part}</Title>
        <p>Model: {model}</p>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
      </Wrapper>
    </LI>
  );
};
