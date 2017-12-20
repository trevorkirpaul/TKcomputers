import React from 'react';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

const Wrapper = styled(Paper)`
  padding: 10px;
  margin: 5px;
`;
const Title = styled.h2`
  color: #383838;
  font-weight: 300;
  font-size: 1.5em;
`;

const SubTitle = styled.h3`
  color: #383838;
  font-weight: 300;
  font-size: 1.2em;
`;

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {},
    };
  }

  renderFormReview = info => {
    // check if passed value (object state containing form info) exists
    // then render li for each object entry
    if (info) {
      return Object.entries(info).map(item => (
        <li key={item[0]}>
          <span>
            {item[0]}: {item[1]}
          </span>
        </li>
      ));
    } else {
      return (
        <li>
          <span>no info</span>
        </li>
      );
    }
  };

  componentDidMount() {
    this.setState(() => ({
      formInfo: this.props.formInfo,
    }));
  }
  componentWillReceiveProps(nextProps) {
    const formInfo = nextProps.formInfo;
    this.setState(() => ({
      formInfo,
    }));
  }
  render() {
    const { formInfo } = this.state;
    return (
      <Wrapper>
        <Title>Review</Title>
        <Divider />
        <ul>{this.renderFormReview(formInfo)}</ul>
        <Divider />
        <SubTitle>Verify Information</SubTitle>
        <p>
          If the above values are correct, please proceed to the next step...
        </p>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  formInfo: state.form.AddPreBuilt.values,
});

export default connect(mapStateToProps)(Review);
