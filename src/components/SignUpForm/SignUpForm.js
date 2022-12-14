import React from 'react';
import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { Form, Hint, Subtitle } from '../SignInForm/signinform.styles';
import { SignUpFormContainer } from './signupform.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormFields({ ...formFields, [id]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.log(error.message);
    }
  };

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <Subtitle>Sign up using your email and password</Subtitle>
      <Form action='submit' onSubmit={handleSubmit}>
        <FormInput
          id='displayName'
          type='text'
          label='Display Name'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          id='email'
          type='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          id='password'
          type='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          id='confirmPassword'
          type='password'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type='submit'>Sign Up</Button>
        <Hint>
          <a href='/signin'>Already have an account? Sign in here</a>
        </Hint>
      </Form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
