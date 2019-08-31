import React from 'react';

export const TitleComponent = ({ titleText }: any) => {
  return (
    <div className="text-center mb-5">
      <hr />
      <h1>{ titleText }</h1>
      <hr />
    </div>
  );
}