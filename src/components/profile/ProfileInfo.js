import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
const Wrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
`;
const WrapperCentered = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;

export default ({ profile }) => {
  if (profile) {
    return (
      <Wrapper>
        <Title>Details</Title>
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <Divider />
        <Title>Address</Title>
        <p>Street: {profile.street}</p>
        <p>City: {profile.city}</p>
        <p>State: {profile.state}</p>
      </Wrapper>
    );
  } else {
    return (
      <WrapperCentered>
        <CircularProgress />
      </WrapperCentered>
    );
  }
};
