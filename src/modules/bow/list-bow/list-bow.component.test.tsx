import React from 'react';
import ReactDOM from 'react-dom';
import ListBowComponent from './list-bow.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListBowComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});