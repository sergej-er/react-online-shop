import React from 'react';
import { useState } from 'react';
import {
  signInEmailPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './signinform.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
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
      const response = await signInEmailPassword(email, password);
      console.log(response);
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
    <div className='signin-form-container'>
      <h2>Already have an account?</h2>
      <span className='form-title'>Sign in using your email and password</span>
      <form className='signin-form' action='submit' onSubmit={handleSubmit}>
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
        <div className='button-group'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Use Google
          </Button>
        </div>
        <p>
          <a href='/signup'>Don't have an account? Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
