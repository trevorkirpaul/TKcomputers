import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';
import ComputerListItem from './ComputerListItem';
const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

// check if list of computers has loaded
// then render computers or loading indicator
export default ({ computers }) => {
  if (computers) {
    return (
      <Wrapper>
        {computers.map(item => (
          <ComputerListItem
            key={item._id}
            name={item.details.name}
            description={item.details.description}
            price={item.details.price}
            imagePath={item.details.imagePath}
          />
        ))}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    );
  }
};
