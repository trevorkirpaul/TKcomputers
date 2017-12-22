import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

// field level validation functions
// const required = value => (value ? undefined : 'Required');

// create custom function to render mat-ui text field inside redux form
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  onChange,
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);
// render select field using mat-ui for redux form
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  onChange,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

export class SelectPartsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpus: [],
      gpus: [],
      ssds: [],
      hdds: [],
      keyboards: [],
      cases: [],
      mouses: [],
      fans: [],
      rams: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const cpus = nextProps.cpus;
    const gpus = nextProps.gpus;
    const ssds = nextProps.ssds;
    const hdds = nextProps.hdds;
    const keyboards = nextProps.keyboards;
    const cases = nextProps.cases;
    const mouses = nextProps.mouses;
    const fans = nextProps.fans;
    const rams = nextProps.rams;
    this.setState(() => ({
      cpus,
      gpus,
      ssds,
      hdds,
      keyboards,
      cases,
      mouses,
      fans,
      rams,
    }));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={renderTextField} label="Pre-Built Name" />
        <Divider />
        <Field name="cpu" component={renderSelectField} label="select a cpu">
          {this.state.cpus.map(cpu => (
            <MenuItem key={cpu._id} value={cpu} primaryText={cpu.model} />
          ))}
        </Field>
        <Divider />
        <Field name="gpu" component={renderSelectField} label="select a gpu">
          {this.state.gpus.map(gpu => (
            <MenuItem key={gpu._id} value={gpu} primaryText={gpu.model} />
          ))}
        </Field>
        <Divider />
        <Field name="ssd" component={renderSelectField} label="select a ssd">
          {this.state.ssds.map(ssd => (
            <MenuItem key={ssd._id} value={ssd} primaryText={ssd.model} />
          ))}
        </Field>
        <Divider />
        <Field name="hdd" component={renderSelectField} label="select a hdd">
          {this.state.hdds.map(hdd => (
            <MenuItem key={hdd._id} value={hdd} primaryText={hdd.model} />
          ))}
        </Field>
        <Divider />
        <Field
          name="keyboard"
          component={renderSelectField}
          label="select a keyboard"
        >
          {this.state.keyboards.map(keyboard => (
            <MenuItem
              key={keyboard._id}
              value={keyboard}
              primaryText={keyboard.model}
            />
          ))}
        </Field>
        <Divider />
        <Field name="case" component={renderSelectField} label="select a case">
          {this.state.cases.map($case => (
            <MenuItem key={$case._id} value={$case} primaryText={$case.model} />
          ))}
        </Field>
        <Divider />
        <Field
          name="mouse"
          component={renderSelectField}
          label="select a mouse"
        >
          {this.state.mouses.map(mouse => (
            <MenuItem key={mouse._id} value={mouse} primaryText={mouse.model} />
          ))}
        </Field>
        <Divider />
        <Field name="fan" component={renderSelectField} label="select a fan">
          {this.state.fans.map(fan => (
            <MenuItem key={fan._id} value={fan} primaryText={fan.model} />
          ))}
        </Field>
        <Divider />
        <Field name="ram" component={renderSelectField} label="select ram">
          {this.state.rams.map(ram => (
            <MenuItem key={ram._id} value={ram} primaryText={ram.model} />
          ))}
        </Field>
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddPreBuilt',
  destroyOnUnmount: false,
})(SelectPartsForm);
