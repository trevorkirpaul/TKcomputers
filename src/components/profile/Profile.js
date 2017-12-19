import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';

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

export class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>User Profile</Title>
        </TitleWrapper>
        <ProfileInfo profile={this.props.profile} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Profile);
