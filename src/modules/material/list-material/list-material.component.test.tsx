import React from 'react';
import ReactDOM from 'react-dom';
import ListMaterialComponent from './list-material.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListMaterialComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});