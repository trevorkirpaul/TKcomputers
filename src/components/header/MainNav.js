import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/products">
        <FlatButton label="Products" />
      </Link>
      <FlatButton label="Support" />
      <FlatButton label="FAQ" />
    </div>
  );
};
