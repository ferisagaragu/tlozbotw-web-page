import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import ListBowComponent from './list-bow/list-bow.component';

interface Props { }

interface State { }

class BowView extends Component<Props, State> {
  render() {
    return (
      <>
       <ListBowComponent
        bows={[
          {
            id: 0,
            title: 'test',
            srcImage: 'image',
            damageBow: '16', 
            descriptionBow: 'test'
          },
          {
            id: 1,
            title: 'test',
            srcImage: 'image',
            damageBow: '15', 
            descriptionBow: 'test'
          },
          {
            id: 2,
            title: 'test',
            srcImage: 'image',
            damageBow: '15', 
            descriptionBow: 'test'
          },
          {
            id: 2,
            title: 'test',
            srcImage: 'image',
            damageBow: '15', 
            descriptionBow: 'test'
          },
          {
            id: 2,
            title: 'test',
            srcImage: 'image',
            damageBow: '15', 
            descriptionBow: 'test'
          }
        ]}
       ></ListBowComponent>
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

export default connect(mapStateToProps,mapDispatchToProps)(BowView);