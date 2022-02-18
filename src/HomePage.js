import React from 'react';
import { signInUser, signUpUser } from './services/fetch_utils';
import { useState } from 'react';

export default function HomePage({ setUser }) {
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

  return (
    <div>HomePage</div>
  )
}

