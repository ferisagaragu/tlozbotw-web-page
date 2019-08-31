import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import ListBowComponent from './list-bow/list-bow.component';
import { getBows } from '../../core/actions/bow-data.actions';
import { BowModel } from '../../core/models/bow.model';
import { UserDataModel } from '../../core/models/user-data.model';
import { alertQuestion } from '../../shared/swal/swal.shared';
import FormEditBowComponent from './form-edit-bow/form-edit-bow.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { TitleComponent } from '../../shared/title/title.component';

interface Props { 
  getBows: Function;
  bowData: Array<BowModel>;
  userData: UserDataModel;
}

interface State {
  modalShow: boolean;
  bowEdit: BowModel;
}

class BowView extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      modalShow: false,
      bowEdit: new BowModel({})
    };
  }

  componentDidMount() {
    const { getBows, userData } = this.props;
    getBows(userData.uid);
  }

  private showModal(bowEdit?: BowModel): void {
    const { modalShow } = this.state;
    this.setState({ 
      modalShow: !modalShow, 
      bowEdit: bowEdit ? bowEdit : new BowModel({})
    });
  }

  private onEdit(formData: BowModel): void {
    this.showModal();
    console.log(formData);
  }

  private onDelete(id: number): void {
    alertQuestion('question', '¿Deseas eliminar el registro?', '', () => {
              
    });
  }

  render() {
    const { bowData, userData } = this.props;
    const { modalShow, bowEdit } = this.state;

    return (
      <>
        <TitleComponent 
          titleText="Arcos"
        />

        <ModalComponent
          size="lg"
          title={ bowEdit.name }
          modalShow={ modalShow }
          body={
            <FormEditBowComponent
              initialValues={ bowEdit }
              submitActions={ (formData: BowModel) => this.onEdit(formData) }
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
          onEdit={ (bowEdit: BowModel) => this.showModal(bowEdit) }
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
  getBows: (id: string) => dispatch(getBows(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(BowView);