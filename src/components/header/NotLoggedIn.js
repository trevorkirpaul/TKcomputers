import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const Button = styled(FlatButton)`
  color: #f7f7f7 !important;
`;

export default props => (
  <div>
    <Link to="/signin">
      <Button label="Sign In" />
    </Link>
    <Link to="/signup">
      <Button label="Sign Up" />
    </Link>
  </div>
);
