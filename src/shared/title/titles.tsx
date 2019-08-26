import React from 'react';
import { ReactComponent as Divider } from '../../styles/svg/divider-blue.svg';

export const title = ({ titleText }: any) => {
  return (
    <div className="text-center mb-5">
      <hr />
      <h1>{ titleText }</h1>
      <hr />
    </div>
  );
}