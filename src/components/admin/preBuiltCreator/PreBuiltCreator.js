import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuilderStepper from './BuilderStepper';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import {
  startGetCpus,
  startGetGpus,
  startGetSSDs,
  startGetHDDs,
  startGetRams,
  startGetKeyboards,
  startGetMouses,
  startGetCases,
  startGetFans,
} from '../../../actions/PreBuiltCreator';

const TitleWrapper = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h1`
  color: #383838;
  font-weight: 300;
  font-size: 1.8em;
`;
export class PreBuiltCreator extends Component {
  componentDidMount() {
    this.props.getCpus();
    this.props.getGpus();
    this.props.getSSDS();
    this.props.getHDDs();
    this.props.getRams();
    this.props.getKeyboards();
    this.props.getMouses();
    this.props.getCases();
    this.props.getFans();
  }
  render() {
    return (
      <div>
        <TitleWrapper>
          <Title>Pre-Built Creator</Title>
        </TitleWrapper>
        <BuilderStepper />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCpus: () => dispatch(startGetCpus()),
  getGpus: () => dispatch(startGetGpus()),
  getSSDS: () => dispatch(startGetSSDs()),
  getHDDs: () => dispatch(startGetHDDs()),
  getRams: () => dispatch(startGetRams()),
  getKeyboards: () => dispatch(startGetKeyboards()),
  getMouses: () => dispatch(startGetMouses()),
  getCases: () => dispatch(startGetCases()),
  getFans: () => dispatch(startGetFans()),
});

export default connect(null, mapDispatchToProps)(PreBuiltCreator);
