import React from 'react';
import { useState } from 'react';
import {
  signInEmailPassword,
  signInWithGooglePopup,
} from '../../utils/firebase';
import Button, { BUTTON_TYPES } from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import {
  ButtonGroup,
  SignInFormContainer,
  Subtitle,
  Form,
  Hint,
} from './signinform.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormFields({ ...formFields, [id]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInEmailPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error.message);
          break;
      }
    }
  };

  return (
    <SignInFormContainer>
      <h2>Already have an account?</h2>
      <Subtitle>Sign in using your email and password</Subtitle>
      <Form action='submit' onSubmit={handleSubmit}>
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
        <ButtonGroup>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES.google}
            onClick={signInWithGoogle}
          >
            Use Google
          </Button>
        </ButtonGroup>
        <Hint>
          <a href='/signup'>Don't have an account? Sign up here</a>
        </Hint>
      </Form>
    </SignInFormContainer>
  );
};

export default SignInForm;
