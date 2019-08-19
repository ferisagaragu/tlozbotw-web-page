import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import './badge-indicator.css';

interface Props { 
  notificationIndicator: number;
}

interface State { }

class BadgeIndicatorComponent extends Component<Props, State> {
  render() {
    const { notificationIndicator } = this.props;
    
    return (
      <>
        {
          notificationIndicator !== 0 &&
            <Badge 
              variant="danger"
            >
              { 
                notificationIndicator >= 100 ?
                  '+99'
                :
                  notificationIndicator
              }
            </Badge>
        }
      </>
    );
  }
}

export default BadgeIndicatorComponent;