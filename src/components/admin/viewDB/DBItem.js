import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
// import FlatButton from 'material-ui/FlatButton';
import DBItemViewMore from './DBItemViewMore';

import { API } from '../../../config';

const Wrapper = styled(Paper)`
  padding: 15px 5px;
  margin: 5px;
  width: 30%;
  text-align: center;
`;
const FieldTitle = styled.span`
  font-weight: 600;
`;
const FieldValue = styled.span`
  font-weight: 300;
  color: palevioletred;
`;
const ImageHolder = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
`;
const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ({ brand = 'n/a', imagePath = 'empty.png', _id, category }) => {
  return (
    <Wrapper>
      <ImageHolder>
        <IMG
          src={`http://${API.IMAGES_URI}${imagePath}`}
          alt="missing product url"
        />
      </ImageHolder>
      <FieldTitle>Brand: </FieldTitle>
      <FieldValue>{brand}</FieldValue>

      <DBItemViewMore id={_id} category={category} />
    </Wrapper>
  );
};
