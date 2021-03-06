import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(FlatButton)`
  color: #f7f7f7 !important;
`;

export default () => {
  return (
    <div>
      <Link to="/products/computers">
        <Button label="Computers" />
      </Link>
      <Link to="/">
        <Button label="Parts" />
      </Link>
    </div>
  );
};
