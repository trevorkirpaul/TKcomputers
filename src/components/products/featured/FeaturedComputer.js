import React from 'react';
import { connect } from 'react-redux';
import { fetchFeaturedComputer } from '../../../actions/productView/productView';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import PartPanel from './PartPanel';

const Wrapper = styled(Paper)`
  padding: 15px;
  margin: 10px auto;
  max-width: 700px;
  text-align: center;
`;

const TitleWrapper = styled(Paper)`
  padding: 15px;
  margin: 10px auto;
  max-width: 700px;
  text-align: center;
`;
const Panel = styled(Paper)`
  padding: 15px;
  margin: 10px auto;
  max-width: 700px;
`;
const Title = styled.h1`
  color: #383838;
  font-weight: 300;
  font-size: 3em;
  margin: 5px;
  padding: 5px;
`;
const SubTitle = styled.h1`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
  margin: 5px;
  padding: 5px;
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Body = styled.p`
  color: #383838;
`;
export class FeaturedComputer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.props.getComputer(this.props.match.params.computerID);
  }
  componentWillReceiveProps(nextProps) {
    const loading = nextProps.productView.loading;
    const product = nextProps.productView.product;
    this.setState(() => ({
      ...product,
      loading,
    }));
  }
  render() {
    const { loading, details, parts } = this.state;
    if (loading) {
      return (
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      );
    } else {
      return (
        <div>
          <TitleWrapper>
            <Title>{details.name}</Title>
            <Divider />
            <Body>{details.description}</Body>
          </TitleWrapper>
          <Panel>
            <Body>Price: {details.price}</Body>
            <Body>Type: {details.type}</Body>
          </Panel>
          <Panel>
            <SubTitle>Parts</SubTitle>
            <UL>
              {Object.keys(parts).map(item => (
                <PartPanel
                  part={item}
                  key={parts[item]._id}
                  brand={parts[item].brand}
                  model={parts[item].model}
                  price={parts[item].price}
                />
              ))}
            </UL>
          </Panel>
          <Panel>
            <RaisedButton label="Add to cart" />
          </Panel>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  productView: state.productView,
});
const mapDispatchToProps = dispatch => ({
  getComputer: id => dispatch(fetchFeaturedComputer(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedComputer);
