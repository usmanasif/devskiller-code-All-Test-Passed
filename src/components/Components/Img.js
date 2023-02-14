import React from 'react';

const Img = (props) => {
  const {src, alt} = props.values

  return (
    <img  alt={alt} src={src} />
  );
};

export {Img};
