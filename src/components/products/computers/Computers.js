import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComputers } from '../../../actions/computers';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import FeaturedItem from './FeaturedItem';
import ComputerList from './ComputerList';

const Wrapper = styled.div``;

const Hero = styled(Paper)`
  max-width: 700px;
  padding: 15px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 600;
  font-size: 3em;
  margin: 5px 0 25px 0;
`;
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #5c5c5c;
  font-weight: 300;
  font-size: 1.5em;
  margin: 10px;
`;

export class Computers extends Component {
  componentDidMount() {
    this.props.fetchComputers();
  }
  render() {
    const computers = this.props.computers.items;
    return (
      <Wrapper>
        <Hero zDepth={1}>
          <Title>Computers</Title>
          <SubTitle>
            Designed and tested to be the best tool you've ever used
          </SubTitle>
        </Hero>
        <FeaturedItem
          title="Andromeda"
          subTitle="Great value for this galaxy"
          computerID="5a3c4af314ae643a2da59758"
        />
        <ComputerList computers={computers} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  computers: state.computers,
});

const mapDispatchToProps = dispatch => ({
  fetchComputers: () => dispatch(fetchComputers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Computers);
