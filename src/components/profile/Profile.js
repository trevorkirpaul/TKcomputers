import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Wrapper = styled.div``;
const TitleWrapper = styled(Paper)`
  padding: 15px;
  margin: 10px auto;
  max-width: 700px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3em;
  color: #383838;
  font-weight: 300;
`;

export default () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>User Profile</Title>
      </TitleWrapper>
    </Wrapper>
  );
};
