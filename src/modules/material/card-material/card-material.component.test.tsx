import React from 'react';
import ReactDOM from 'react-dom';
import CardMaterialComponent from './card-material.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardMaterialComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});