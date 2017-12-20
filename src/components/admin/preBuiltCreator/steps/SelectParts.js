import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import SelectPartsForm from '../forms/SelectPartsForm';
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

export const SelectParts = ({
  cpus,
  gpus,
  ssds,
  hdds,
  keyboards,
  cases,
  mouses,
  fans,
  rams,
  nameValue,
}) => {
  return (
    <Wrapper>
      <Title>Select Parts/Components</Title>

      <Divider />
      <SelectPartsForm
        cpus={cpus}
        gpus={gpus}
        ssds={ssds}
        hdds={hdds}
        keyboards={keyboards}
        cases={cases}
        mouses={mouses}
        fans={fans}
        rams={rams}
      />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  cpus: state.PreBuiltCreator.cpus,
  gpus: state.PreBuiltCreator.gpus,
  ssds: state.PreBuiltCreator.ssds,
  hdds: state.PreBuiltCreator.hdds,
  keyboards: state.PreBuiltCreator.keyboards,
  cases: state.PreBuiltCreator.cases,
  mouses: state.PreBuiltCreator.mouses,
  fans: state.PreBuiltCreator.fans,
  rams: state.PreBuiltCreator.rams,
});

export default connect(mapStateToProps)(SelectParts);
