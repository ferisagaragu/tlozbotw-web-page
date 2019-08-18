import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormRegistReducerEnum } from '../../../core/enums/form-regist-reducer.enum';
import { Button } from 'react-bootstrap';
import './form-regist.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  showButtons: boolean;
}

interface State { }

class FormRegistComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions, showButtons } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name=""
          component={ renderTextField }
          label="Imagen de usuario"
        />

        <Field 
          className="form-control"
          name=""
          component={ renderTextField }
          label="Nombre de usuario"
        />

        <Field 
          className="form-control"
          name=""
          component={ renderTextField }
          label="Correo"
        />

        <Field 
          className="form-control"
          name=""
          component={ renderTextField }
          label="Contraseña"
        />

        {
          showButtons &&
            <div className="text-center">
              <Button 
                className="mr-3"
                onClick={ cancel }
                variant="outline-danger"
              >
                Cancelar
              </Button>

              <Button 
                type="submit"
                variant="outline-info" 
                disabled={ submitting }
              >
                Registrar
              </Button>
            </div>
        }
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    example: ''
  }
  
  if (!values.example) {
    errors.example = 'example is requiered';
  }

  return errors
}

export default reduxForm({
  form: FormRegistReducerEnum.FORM_REGIST_SUBMIT,
  validate
})(FormRegistComponent);