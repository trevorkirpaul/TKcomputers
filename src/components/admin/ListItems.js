import React from 'react'
import styled from 'styled-components';
import ListItem from './ListItem'

const Ul = styled.ul`
  max-width: 500px;
  background: white;
  border: 1px solid #383838;
  color: #383838;
  padding: 25px 15px;
  
  list-style: none;
`;

export default ({items}) => {
  return (
    <Ul>
      {
        items.map((item) => <ListItem key={item._id} {...item}/>)
      }
    </Ul>
  )
}
