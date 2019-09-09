import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { TitleComponent } from '../../shared/title/title.component';
import { MultiSelect } from '../../shared/select/select';
import ListMaterialComponent from './list-material/list-material.component';
import { getMaterial } from '../../core/actions/material-data.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { MaterialModel } from '../../core/models/material.model';

interface Props {
  userData: UserDataModel;
  materialData: Array<MaterialModel>;
  getMaterial: Function;
}

interface State { }

class MaterialView extends Component<Props, State> {
  
  componentDidMount() {
    const { userData, getMaterial } = this.props;
    getMaterial(userData.uid);
  }
  
  render() {
    const { materialData } = this.props;

    return (
      <>
        <TitleComponent 
          titleText="Materiales"
        />

        <MultiSelect 
          className="col-md-12 mb-5 fadeInDownBig-animation"
          options={ [{ label: 'Soy una opcion', value: 1 }] }
          onChange={ (selectedData: any) => { console.log(selectedData) } }
        />

        <ListMaterialComponent 
          className="fadeInRight-animation"
          materials={ materialData }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  materialData: state.materialData
});

const mapDispatchToProps = (dispatch: Function) => ({
  getMaterial: (userId: any) => dispatch(getMaterial(userId))
});

export default connect(mapStateToProps,mapDispatchToProps)(MaterialView);