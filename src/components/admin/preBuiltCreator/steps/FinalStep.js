import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';

const Wrapper = styled(Paper)`
  padding: 15px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
`;

export const FinalStep = props => {
  const { handleSubmit, goBack } = props;
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Title>Submit</Title>
        <RaisedButton label="go back" onClick={goBack} />

        <RaisedButton label="submit computer" secondary={true} type="submit" />
      </form>
    </Wrapper>
  );
};

export default reduxForm({
  form: 'AddPreBuilt',
  destroyOnUnmount: false,
})(FinalStep);
