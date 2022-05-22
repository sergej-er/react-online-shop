import React from 'react';
import './button.styles.scss';

const BUTTON_TYPES = {
  google: 'google-signin',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPES[buttonType]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
