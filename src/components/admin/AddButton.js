import React from 'react';
import AddForm from './addForms/AddForm';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

export default props => {
  return (
    <div>
      <RaisedButton
        label={props.label}
        onClick={props.onClick}
        secondary={true}
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
