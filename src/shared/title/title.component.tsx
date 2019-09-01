import React from 'react';

interface Props { 
  titleText: string;
}

export const TitleComponent = ({ titleText }: Props) => {
  return (
    <div className="text-center mb-5 fadeInLeft-animation">
      <hr />
      <h1>{ titleText }</h1>
      <hr />
    </div>
  );
}