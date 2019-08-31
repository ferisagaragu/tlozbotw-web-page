import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import ListBowComponent from './list-bow/list-bow.component';
import { getBows, updateBow, createBow, deleteBow } from '../../core/actions/bow-data.actions';
import { BowModel } from '../../core/models/bow.model';
import { UserDataModel } from '../../core/models/user-data.model';
import { alertQuestion } from '../../shared/swal/swal.shared';
import FormBowComponent from './form-bow/form-bow.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TitleComponent } from '../../shared/title/title.component';

interface Props { 
  getBows: Function;
  createBow: Function;
  updateBow: Function;
  deleteBow: Function;
  bowData: Array<BowModel>;
  userData: UserDataModel;
}

interface State {
  modalShow: boolean;
  bowCreateEdit: BowModel;
}

class BowView extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      modalShow: false,
      bowCreateEdit: new BowModel({})
    };
  }

  componentDidMount() {
    const { getBows, userData } = this.props;
    getBows(userData.uid);
  }

  private showModal(bowCreateEdit?: BowModel): void {
    const { modalShow } = this.state;
    this.setState({ 
      modalShow: !modalShow, 
      bowCreateEdit: bowCreateEdit ? bowCreateEdit : new BowModel({})
    });
  }

  private onSubmit(formData: BowModel) {
    if (formData.id === 0) {
      this.createBow(formData);
    } else {
      this.onEdit(formData);
    }
  }

  private onEdit(formData: BowModel): void {
    const { updateBow } = this.props;
    this.showModal();
    updateBow(formData);
  }

  private createBow(formData: BowModel): void {
    const { createBow } = this.props;
    this.showModal();
    createBow(formData);
  }

  private onDelete(id: number): void {
    alertQuestion('question', '¿Deseas eliminar el registro?', '', () => {
      const { deleteBow } = this.props;
      deleteBow(id);
    });
  }

  private createTitle() {
    const { bowCreateEdit } = this.state;
    return (
      bowCreateEdit.name ? 
        bowCreateEdit.name 
      : 
        'Crear nuevo arco'
    );
  }

  render() {
    const { bowData, userData } = this.props;
    const { modalShow, bowCreateEdit } = this.state;

    return (
      <>
        <TitleComponent 
          titleText="Arcos"
        />

        <ModalComponent
          size="lg"
          title={ this.createTitle() }
          modalShow={ modalShow }
          body={
            <FormBowComponent
              initialValues={ bowCreateEdit }
              submitActions={ (formData: BowModel) => this.onSubmit(formData) }
              cancel={ () => this.showModal() }
            />
          }
          onHide={ () => this.showModal() }
        />

        <ListBowComponent
          className="animated fadeInRight delay-1s"
          bows={ bowData }
          userRole={ userData.role }
          onDelete={ (id: number) => this.onDelete(id) }
          onEdit={ (bowCreateEdit: BowModel) => this.showModal(bowCreateEdit) }
          onCreate={ () => this.showModal() }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  bowData: state.bowData,
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  getBows: (id: string) => dispatch(getBows(id)),
  createBow: (bowData: BowModel) =>  dispatch(createBow(bowData)),
  deleteBow: (bowId: number) => dispatch(deleteBow(bowId)),
  updateBow: (bowData: BowModel) => dispatch(updateBow(bowData))
});

export default connect(mapStateToProps,mapDispatchToProps)(BowView);