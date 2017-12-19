import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import AddItemButtons from './AddItemButtons';
import ViewDBPanel from './viewDB/ViewDBPanel';

import RaisedButton from 'material-ui/RaisedButton';
// styling
const Wrapper = styled.div`
  margin: 15px;
`;
const Panel = styled(Paper)`
  padding: 15px;
  max-width: 700px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 600;
  font-size: 2em;
`;
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 300;
  font-size: 1.2em;
`;

export class Admin extends Component {
  render() {
    return (
      <Wrapper>
        <Panel zDepth={1}>
          <Title>Admin Dashboard</Title>
          <SubTitle>
            An easy way to manage the database behind TKcomputers
          </SubTitle>
        </Panel>
        <Panel>
          <SubTitle>Add Item to Database</SubTitle>
          <AddItemButtons />
        </Panel>

        <Panel>
          <SubTitle>View Database</SubTitle>
          <ViewDBPanel />
        </Panel>

        <Panel>
          <SubTitle>Manage Pre-Built Computers</SubTitle>
          <Link to="/create/computer">
            <RaisedButton label="Create" />
          </Link>
        </Panel>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(Admin);
