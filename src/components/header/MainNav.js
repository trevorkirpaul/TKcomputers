import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/products/computers">
        <FlatButton label="Computers" />
      </Link>
      <FlatButton label="Laptops" />
      <FlatButton label="Software" />
    </div>
  )
}
