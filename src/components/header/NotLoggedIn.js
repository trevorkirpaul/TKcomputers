import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

export default props => (
  <div>
    <Link to="/signin">
      <FlatButton label="Sign In" />
    </Link>
    <Link to="/signup">
      <FlatButton label="Sign Up" />
    </Link>
  </div>
);
