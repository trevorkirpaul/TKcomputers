import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import CartItems from './CartItems';
const Wrapper = styled(Paper)`
  padding: 15px;
  margin: 10px auto;
  max-width: 700px;
  text-align: center;
`;
const Title = styled.h1`
  color: #383838;
  font-weight: 300;
  font-size: 1.8em;
  margin: 5px 0;
`;

export const ShoppingCart = () => {
  return (
    <div>
      <Wrapper>
        <Title>Shopping Cart</Title>
      </Wrapper>
      <Wrapper>
        <CartItems />
      </Wrapper>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.profile,
});

export default connect(mapStateToProps)(ShoppingCart);
