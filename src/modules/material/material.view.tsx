import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { TitleComponent } from '../../shared/title/title.component';
import { MultiSelect } from '../../shared/select/select';
import ListMaterialComponent from './list-material/list-material.component';

interface Props { }

interface State { }

class MaterialView extends Component<Props, State> {
  render() {
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

        <ListMaterialComponent />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  //examepleGlobalState: state.examepleGlobalState
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(MaterialView);