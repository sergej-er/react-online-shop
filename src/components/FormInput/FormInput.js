import React from 'react';
import { Group, Input, InputLabel } from './forminput.styles';

const FormInput = ({ id, label, ...otherProps }) => {
  return (
    <Group>
      <Input id={id} {...otherProps} autoComplete='off' />
      {label && (
        <InputLabel htmlFor={id} shrink={otherProps.value.length}>
          {label}
        </InputLabel>
      )}
    </Group>
  );
};

export default FormInput;
