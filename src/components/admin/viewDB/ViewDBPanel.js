import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DBItems from './DBItems';
import { startGetItems } from '../../../actions/viewDB/loadView';

const Wrapper = styled(Paper)`
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
`;

export class ViewDBPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuValueDB: 'cpu',
    };
  }
  handleMenuValueDBChange = (event, index, value) => {
    this.setState({ menuValueDB: value });
  };
  handleGetItems = () => {
    this.props.getItems(this.state.menuValueDB);
  };
  render() {
    const menuOptions = [
      'cpu',
      'gpu',
      'ssd',
      'hdd',
      'ram',
      'fan',
      'keyboard',
      'mouse',
      'case',
    ];
    return (
      <div>
        <Wrapper>
          <Toolbar>
            <ToolbarGroup>
              <SelectField
                floatingLabelText="Select Category:"
                value={this.state.menuValueDB}
                onChange={this.handleMenuValueDBChange}
              >
                {menuOptions.map(item => (
                  <MenuItem key={item} value={item} primaryText={item} />
                ))}
              </SelectField>
            </ToolbarGroup>

            <ToolbarGroup>
              <RaisedButton
                icon={
                  <FontIcon className="fa fa-refresh" color="palevioletred" />
                }
                onClick={this.handleGetItems}
              />
            </ToolbarGroup>
          </Toolbar>
        </Wrapper>
        <Wrapper>
          <DBItems
            items={this.props.partsFromDB}
            category={this.state.menuValueDB}
          />
        </Wrapper>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  partsFromDB: state.adminViewItems,
});

const mapDispatchToProps = dispatch => ({
  getItems: name => dispatch(startGetItems(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDBPanel);
