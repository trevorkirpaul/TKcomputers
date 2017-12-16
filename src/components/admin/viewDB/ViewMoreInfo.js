import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGetItem } from '../../../actions/viewDB/viewMoreItem';

export class ViewMoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      stringFields: [],
      numberFields: [],
      boolFields: [],
    };
  }
  componentDidMount() {
    const id = this.props.id;
    const category = this.props.category;
    this.props.getItem(id, category);
  }
  componentWillReceiveProps(nextProps) {
    const item = nextProps.itemInfo;
    this.setState({ item });
    this.parseFields(item);
  }
  parseFields = item => {
    // grab keys from item object
    const keys = Object.getOwnPropertyNames(item);
    // create arrays of search terms
    const stringTerms = [
      'brand',
      'chipset',
      'cpuSeries',
      'memory',
      'socket',
      'imagePath',
    ];
    const numberTerms = [
      'operating',
      'max',
      'l3Cache',
      'threads',
      'cores',
      'pciLanes',
    ];
    // filter using search terms to create new arrays
    const stringFields = keys.filter(key => {
      return stringTerms.includes(key);
    });

    const numberFields = keys.filter(key => {
      return numberTerms.includes(key);
    });
    // set state
    this.setState({
      stringFields,
      numberFields,
    });
  };

  render() {
    const { item } = this.state;
    return (
      <ul>
        <h2>{item && item._id}</h2>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  itemInfo: state.viewMoreItem,
});

const mapDispatchToProps = dispatch => ({
  getItem: (id, category) => dispatch(startGetItem(id, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMoreInfo);
