import React from 'react';
import ReactDOM from 'react-dom';
import CardBowComponent from './card-bow.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardBowComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});