import React from 'react'
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: #D0E87A;
  display: flex;
  justify-content: center;
`;
const Button = styled(FlatButton)`
  color: #383838 !important;
`;

export default () => {
  return (
    <Wrapper>
      <Link to="/products/computers">
        <Button label="Computers" />
      </Link>
      <Link to="/products/components">
        <Button label="Components" />
      </Link>
    </Wrapper>
  )
}
