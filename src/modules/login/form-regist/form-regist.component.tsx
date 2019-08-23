import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormRegistReducerEnum } from '../../../core/enums/form-regist-reducer.enum';
import { Button, Row, Col } from 'react-bootstrap'; 
import dafaultUserImage from '../../../styles/img/default-user.jpg';
import './form-regist.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  showButtons: boolean;
}

interface State { 
  img: string;
}

class FormRegistComponent extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      img: ''
    }
  }
  
  private onKeyUpImg(imgUrl: string): void {
    this.setState({ img: imgUrl });
  }

  render() {
    const { handleSubmit, cancel, submitting, submitActions, showButtons } = this.props;
    const { img } = this.state;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="text-center mb-3">
            <img
              className="rounded-circle img-defaul-user"
              alt="user"
              src={ !img ? dafaultUserImage : img }
            />
          </Col>
        </Row>
        
        <Field 
          className="form-control"
          name="img"
          type="text"
          component={ renderTextField }
          label="Imagen de usuario"
          onKeyUp= { (evt: any) => { this.onKeyUpImg(evt.currentTarget.value) } }
        />

        <Field 
          className="form-control"
          name="name"
          type="text"
          component={ renderTextField }
          label="Nombre de usuario"
        />

        <Field 
          className="form-control"
          name="email"
          type="email"
          component={ renderTextField }
          label="Correo"
        />

        <Field 
          className="form-control"
          name="password"
          type="password"
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
    name: '',
    email: '',
    password: ''
  }

  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }

  if (!values.email) {
    errors.email = 'El correo es requerido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }

  return errors
}

export default reduxForm({
  form: FormRegistReducerEnum.FORM_REGIST_SUBMIT,
  validate
})(FormRegistComponent);