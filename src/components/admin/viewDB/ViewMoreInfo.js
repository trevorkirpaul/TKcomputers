import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGetItem } from '../../../actions/viewDB/viewMoreItem';

export class ViewMoreInfo extends Component {
  componentDidMount() {
    const id = this.props.id;
    const category = this.props.category;

    this.props.getItem(id, category);
  }
  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => ({
  getItem: (id, category) => dispatch(startGetItem(id, category)),
});

export default connect(null, mapDispatchToProps)(ViewMoreInfo);
