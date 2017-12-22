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
      formData: {},
    };
  }

  renderFormReview = info => {
    // check if passed value (object state containing form info) exists
    // then render li for each object entry
    if (info) {
      return info.map(part => {
        if (part.length > 1) {
          return (
            <li key={part._id}>
              {part.brand} {part.model} {part.price}
            </li>
          );
        } else {
          return <li key={part.key}>{part.value}</li>;
        }
      });
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
      formData: {
        ...this.props.formInfo,
      },
    }));
  }
  // check if formData has values, if true then render review details,
  //  if false render message to return
  render() {
    if (this.state.formData.cpu) {
      const {
        cpu,
        gpu,
        fan,
        hdd,
        ssd,
        ram,
        mouse,
        keyboard,
      } = this.state.formData;
      const $case = this.state.formData.case;
      const $parts = [cpu, gpu, fan, hdd, ssd, ram, mouse, keyboard, $case];
      return (
        <Wrapper>
          <Title>Review</Title>
          <Divider />
          <ul>
            {$parts.map(part => {
              if (part) {
                return (
                  <li key={part._id}>
                    {part.brand} {part.model}
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
          <Divider />
          <SubTitle>Verify Information</SubTitle>
          <p>
            If the above values are correct, please proceed to the next step...
          </p>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Title>Please complete the form</Title>
        </Wrapper>
      );
    }
  }
}

const mapStateToProps = state => ({
  formInfo: state.form.AddPreBuilt.values,
});

export default connect(mapStateToProps)(Review);
