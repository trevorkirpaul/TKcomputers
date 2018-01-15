import React from 'react';
import { IMG_url } from '../../../config';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Wrapper = styled.li`
  margin: 10px;
  flex: 45%;
`;

const Panel = styled(Paper)`
  padding: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export default ({ name, description, price, imagePath }) => {
  return (
    <Wrapper>
      <Panel>
        <Img src={`${IMG_url}${imagePath}`} />
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
      </Panel>
    </Wrapper>
  );
};
