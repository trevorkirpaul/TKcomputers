import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import MultiForm from '../forms/MultiForm';
import { connect } from 'react-redux';
const Wrapper = styled(Paper)`
  padding: 10px;
  margin: 5px;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;
// const Body = styled.p`
//   color: #383838;
//   line-height: 1.8em;
// `;

export const SelectParts = ({ cpus }) => {
  return (
    <Wrapper>
      <Title>Select Parts/Components</Title>

      <Divider />
      <MultiForm cpus={cpus} />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  cpus: state.PreBuiltCreator.cpus,
});

export default connect(mapStateToProps)(SelectParts);
