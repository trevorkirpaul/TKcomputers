import React from 'react'
import styled from 'styled-components';
import {Field, reduxForm} from 'redux-form';

const WrapperForm = styled.form`
  padding: 25px 15px;
  background: white;
  border: 1px solid #383838;
  max-width: 500px;
`;

const FormEle = styled.div`
  margin: 20px 0;
`;

const AddOS = props => {
  const { handleSubmit } = props;
  return (

    <WrapperForm onSubmit={handleSubmit}>

      <FormEle>
        <label htmlFor="manufacturer">Manufacturer: </label>
        <Field name="manufacturer" component="input" type="text" />
      </FormEle>

      <FormEle>
        <label htmlFor="platform">Platform: </label>
        <Field name="platform" component="input" type="text" />  
      </FormEle>

      <FormEle>
        <label htmlFor="flavor">Flavor: </label>
        <Field name="flavor" component="input" type="text" />
      </FormEle>

      <FormEle>
        <label htmlFor="price">Price: </label>
        <Field name="price" component="input" type="text" />
      </FormEle>

      <FormEle>
        <label htmlFor="imagePath">Path to Image: </label>
        <Field name="imagePath" component="input" type="text" />
      </FormEle>

      <FormEle>
        <button type="submit">Submit</button>
      </FormEle>
    </WrapperForm>

  );
}

export default reduxForm({
  form: 'AddOS'
})(AddOS);