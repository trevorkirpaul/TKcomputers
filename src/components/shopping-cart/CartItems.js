import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchShoppingCart,
  removeItemShoppingCart,
} from '../../actions/shoppingCart';
import CartItem from './CartItem';

export class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  handleRemoveItem = itemID => {
    // console.log(itemID);
    const userID = this.props.id;
    const cartItemID = itemID;
    this.props.removeItem(userID, cartItemID);
  };
  renderCart = () => {
    return this.state.items ? (
      this.state.items.map((item, index) => (
        <CartItem
          key={index}
          itemID={item._id}
          quantity={item.itemDetails.quantity}
          price={item.itemDetails.pricePerUnit}
          handleRemove={this.handleRemoveItem}
        />
      ))
    ) : (
      <li>no items in cart</li>
    );
  };
  componentDidMount() {
    this.props.fetchCart(this.props.id);
    this.setState(() => ({
      items: this.props.cart,
    }));
  }
  componentWillReceiveProps(nextProps) {
    const items = nextProps.cart;
    this.setState(() => ({
      items,
    }));
  }
  render() {
    return (
      <div>
        <ul>{this.renderCart()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.shoppingCart.cart,
  id: state.auth.userID,
});
const mapDispatchToProps = dispatch => ({
  fetchCart: id => dispatch(fetchShoppingCart(id)),
  removeItem: (userID, cartItemID) =>
    dispatch(removeItemShoppingCart(userID, cartItemID)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
