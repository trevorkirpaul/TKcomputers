import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import { API } from '../../../config';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const IMG = `http://${API.IMAGES_URI}banner`;

const Wrapper = styled(Paper)`
  max-width: 700px;
  background-image: url("${IMG}/andromeda.jpeg");
  margin: 10px auto;
  padding: 15px;
  text-align: center;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 1.7em;
  margin: 5px 0;
  padding: 5px;
  font-weight: 600;
  color: #f8f8f8;
  background: #383838;
`;
const Body = styled.p`
  display: inline-block;
  color: #f8f8f8;
  font-size: 1.2em;
  margin: 5px 0;
  padding: 5px;
  background: #383838;
`;

export default () => {
  return (
    <Wrapper>
      <div>
        <Title>Andromeda</Title>
      </div>

      <div>
        <Body>Great value for this galaxy</Body>
      </div>

      <Link to="/featured/andromeda">
        <RaisedButton label="View more" />
      </Link>
    </Wrapper>
  );
};
