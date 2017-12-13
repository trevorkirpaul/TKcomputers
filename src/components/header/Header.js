import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 10px;
  background: #383838;
  color: #F7F7F7;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

`;

const Logo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #383838;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  padding: 15px 25px;
  background: #D0E87A;
  
`;
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #F7F7F7;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  padding: 15px 25px;
  
  
  &:hover {
    color: #D0E87A;
    
  }
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        
        <Logo to='/'>TKcomputers</Logo>        
        <StyledLink to='/admin'>admin</StyledLink>
      </Wrapper>
    )
  }
}
