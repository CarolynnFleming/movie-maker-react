import React from 'react';
import { signInUser, signUpUser } from './services/fetch_utils';
import { useState } from 'react';

export default function HomePage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
    setSignUpEmail('');
    setSignUpPassword('');
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
    setSignInEmail('');
    setSignInPassword('');
  }
  return (
    <div>HomePage</div>
  );
}

