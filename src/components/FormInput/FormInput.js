import React, { Fragment } from 'react';
import './forminput.styles.scss';

const FormInput = ({ id, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        id={id}
        className='form-input'
        {...otherProps}
        autoComplete='off'
      />
      {label && (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
