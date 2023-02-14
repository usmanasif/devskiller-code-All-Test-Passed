import React from 'react';

const A = (props) => {
  const { href, label } = props.values;

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
};

export {A};

