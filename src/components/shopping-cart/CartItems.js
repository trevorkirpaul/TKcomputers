import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShoppingCart } from '../../actions/shoppingCart';

export class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  renderCart = () => {
    return this.state.items ? (
      this.state.items.map((item, i) => <li key={i}>{item.details.name}</li>)
    ) : (
      <li>no</li>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
