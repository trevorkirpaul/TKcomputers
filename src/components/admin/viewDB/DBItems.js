import React from 'react';
import styled from 'styled-components';
import DBItem from './DBItem';
const Wrapper = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default props => {
  return (
    <Wrapper>
      {props.items &&
        props.items.map(item => (
          <DBItem key={item._id} category={props.category} {...item} />
        ))}
    </Wrapper>
  );
};
