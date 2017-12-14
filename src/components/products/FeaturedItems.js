import React from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import ItemCard from './ItemCard';



const Wrapper = styled.div``;
const Panel = styled(Paper)`
  max-width: 700px;
  padding: 15px;
  margin: 10px auto;
  text-align: center;
  
`;
const SectionTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #5C5C5C;
  font-weight: 300;
  font-size: 1.2em;
  margin: 10px;
`;


export default ({title}) => {
  return (
    <Wrapper>
      <Panel zDepth={1}>
        <SectionTitle>{title}</SectionTitle>
        <ItemCard />
      </Panel>
    </Wrapper>
  )
}
