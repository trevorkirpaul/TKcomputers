import React from 'react'
import ProductHeader from './ProductHeader'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import CpuFeatured from './components_views/CpuFeatured'
const Wrapper = styled.div`
  

`
const Panel = styled(Paper)`
  width: 700px;
  margin: 10px auto;
  padding: 15px;
  text-align: center;
`
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 600;
  font-size: 3em;
  margin: 5px 0 25px 0;
`
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #5C5C5C;
  font-weight: 300;
  font-size: 1.5em;
  margin: 10px;
`; 

export default () => {
  return (
    <Wrapper>
      <ProductHeader />
        <Panel zDepth={1}>
          <Title>
            Components
          </Title>
          <SubTitle>
            The biggest selection of parts in the world
          </SubTitle>
        </Panel>
        <Panel zDepth={1}>
          <CpuFeatured />
        </Panel>
    </Wrapper>
  )
}
