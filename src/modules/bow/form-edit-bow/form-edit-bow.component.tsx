import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField, renderTextArea } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormEditBowReducerEnum } from '../../../core/enums/form-edit-bow-reducer.enum';
import { BowModel } from '../../../core/models/bow.model';
import { Button } from 'react-bootstrap';
import './form-edit-bow.css';

interface Props { 
  initialValues: BowModel;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormEditBowComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="img"
          component={ renderTextField }
          label="Url de imagen"
        />
        
        <Field 
          className="form-control"
          name="name"
          component={ renderTextField }
          label="Nombre"
        />

        <Field 
          className="form-control"
          name="damage"
          component={ renderTextField }
          label="Daño"
        />

        <Field 
          className="form-control"
          name="description"
          component={ renderTextArea }
          label="Descripción"
        />
        
        <div className="text-right mt-4">
          <Button
            className="mr-3 btn-hover color-9" 
            type="submit" 
            disabled={ submitting }
          >
            Editar
          </Button>

          <Button
            className="mr-3 btn-hover color-11"
            onClick={ cancel }
          >
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    img: '',
    name: '',
    damage: '',
    description: ''
  }
  
  if (!values.img) {
    errors.img = 'La imagen del arco es requerida';
  }

  if (!values.name) {
    errors.name = 'El nombre del arco es requerido';
  }

  if (!values.damage) {
    errors.damage = 'El daño del arco es requerido';
  }

  if (!values.description) {
    errors.description = 'La descripción es requerida';
  }

  return errors
}

export default reduxForm({
  form: FormEditBowReducerEnum.FORM_EDIT_BOW_SUBMIT,
  validate
})(FormEditBowComponent);