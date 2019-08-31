import React from 'react';
import ReactDOM from 'react-dom';
import FormEditBowComponent from './form-bow.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormEditBowComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});