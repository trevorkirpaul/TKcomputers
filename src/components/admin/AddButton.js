import React from 'react';
import AddForm from './addForms/AddForm';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';

const Button = styled(RaisedButton)`
  margin-bottom: 15px;
`;

export default props => {
  return (
    <div>
      <Button
        label={props.label}
        onClick={props.onClick}
        secondary={true}
        labelStyle={{
          display: 'block',
        }}
      />
      <Dialog
        title={props.title}
        actions={props.actions}
        modal={props.modal}
        open={props.open}
        autoScrollBodyContent={props.autoScrollBodyContent}
      >
        <AddForm
          onSubmit={props.onSubmit}
          fields={props.fields}
          numberFields={props.numberFields}
          boolFields={props.boolFields}
          errorStatus={props.errorStatus}
        />
      </Dialog>
    </div>
  );
};
