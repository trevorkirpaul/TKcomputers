import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Wrapper = styled(Paper)`
  padding: 5px;
  maring: 5px;
`;

export default ({ itemID, quantity, price, handleRemove }) => {
  return (
    <Wrapper>
      <p>ID: {itemID}</p>
      <p>price: {price}</p>
      <p>quantity: {quantity}</p>

      <RaisedButton label="Remove" onClick={() => handleRemove(itemID)} />
    </Wrapper>
  );
};
