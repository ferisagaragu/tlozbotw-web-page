import React from 'react';
import ReactDOM from 'react-dom';
import ListMakerComponent from './list-maker.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListMakerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});