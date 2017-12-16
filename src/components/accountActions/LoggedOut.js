import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const Wrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 300;
  color: #383838;
`;

export default () => {
  return (
    <Wrapper>
      <Title>You have signed out!</Title>
      <Link to="/">
        <FlatButton label="Home" />
      </Link>
    </Wrapper>
  );
};
