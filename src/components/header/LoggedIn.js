import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default props => {
  return (
    <div>
      <Link to="/admin">
        <FlatButton
          label="Admin"
          icon={<FontIcon className="fa fa-database" />}
        />
      </Link>
      <FlatButton
        label="Log Out"
        icon={<FontIcon className="fa fa-sign-out" />}
        onClick={props.handleModalOpen}
      />
    </div>
  );
};
