import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  checkItems = () => {
    return this.state.items.length > 0 && true;
  };
  componentDidMount() {
    this.setState(() => ({
      items: this.props.items,
    }));
  }
  componentWillReceiveProps(nextProps) {
    const items = nextProps.items;
    this.setState(() => ({
      items,
    }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.checkItems === true ? (
            this.state.items.map(item => <li key={item}>{item}</li>)
          ) : (
            <li>
              <p>Shopping Cart Empty</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.profile,
});
export default connect(mapStateToProps)(CartItems);
