import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';
import './status-indicator.css';

interface Props { 
  message: string;
  send: boolean;
}

interface State { }

class StatusIndicatorComponent extends Component<Props, State> {
  render() {
    const { message, send } = this.props;

    return (
      <div className="text-center mt-3">
        {
          send &&
          <>
            {
              message ? 
                <label className="text-danger">{ message }</label>
              :
                <BeatLoader color="#E91E63" />
            }
          </>  
        }
      </div>
    );
  }
}

export default StatusIndicatorComponent;