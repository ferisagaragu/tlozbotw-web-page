import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './check-photo.css';

export const CheckPhoto = ({ checked, onCheck }: any) => {
  return (
    <button 
      className={ checked ? 'check-photo' : 'no-check-photo' }
      onClick={ () => onCheck() }
    >
      <FontAwesomeIcon icon="camera" />
    </button>
  );
}