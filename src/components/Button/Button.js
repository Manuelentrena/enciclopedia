import React from 'react';

const Button = ({
  type = '', className = '', text = '', action = null,
}) => {
  let handleClick = null;

  if (action) {
    handleClick = (e) => {
      action(e);
    };
  }

  return (
    <button className={className} type={type} onClick={(e) => handleClick(e)}>
      {text}
    </button>
  );
};

export default Button;
