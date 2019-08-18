import React from 'react';
import ReactDOM from 'react-dom';
import StatusIndicatorComponent from './status-indicator.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusIndicatorComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});