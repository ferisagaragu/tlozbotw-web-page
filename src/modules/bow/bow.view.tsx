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
import { MultiSelect } from '../../shared/select/select';

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
  bowSearched: Array<BowModel>;
}

class BowView extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      modalShow: false,
      bowCreateEdit: new BowModel({}),
      bowSearched: []
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

  private onSubmit(formData: BowModel): void {
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

  private createTitle(): string {
    const { bowCreateEdit } = this.state;
    return (
      bowCreateEdit.name ? 
        bowCreateEdit.name 
      : 
        'Crear nuevo arco'
    );
  }

  private createOptions(): Array<any> {
    const { bowData } = this.props;
    if (bowData) {
      return bowData.map((bow: BowModel) => ({ label: bow.name, value: JSON.stringify(bow) }));
    } else {
      return [];
    }
  }

  private putSearched(selectedData: any): void {
    const bowSearched: Array<BowModel> = [];
    
    if (selectedData) {
      selectedData.forEach((element: any) => {
        bowSearched.push(JSON.parse(element.value));
      });
    }

    this.setState({ bowSearched });
  }

  render() {
    const { bowData, userData } = this.props;
    const { modalShow, bowCreateEdit, bowSearched } = this.state;

    return (
      <>
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

        <TitleComponent 
          titleText="Arcos"
        />
        
        <MultiSelect 
          className="col-md-12 mb-5 fadeInDownBig-animation"
          options={ this.createOptions() }
          onChange={ (selectedData: any) => this.putSearched(selectedData) }
          noOptionsMessage="No se encontraron conicidencias con ese Arco"
          placeholder="Busca un arco"
        />

        <ListBowComponent
          className="fadeInRight-animation"
          bows={ bowSearched.length !== 0 ? bowSearched : bowData }
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