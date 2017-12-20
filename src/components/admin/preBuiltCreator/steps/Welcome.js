import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const Wrapper = styled(Paper)`
  padding: 10px;
  margin: 5px;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;
const Body = styled.p`
  color: #383838;
  line-height: 1.8em;
`;
export default () => {
  return (
    <Wrapper>
      <Title>Welcome</Title>
      <Divider />
      <Body>
        Using this tool, you can create a new pre-built computer package for
        customers of TKcomputer to purchase.
      </Body>
      <Body>
        If you need any help, please contact your manager or read through the
        Guidelines.
      </Body>
      <FlatButton label="Guidelines" secondary={true} />
    </Wrapper>
  );
};
