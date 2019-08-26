import React from 'react';
import ReactDOM from 'react-dom';
import SectionMakerComponent from './section-maker.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionMakerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});