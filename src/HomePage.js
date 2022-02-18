import React from 'react';
import { signIn, signUp } from './services/fetch_utils';
import { useState } from 'react';

export default function HomePage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);
    setUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);
    setUser(user);
  }
  return (
    <div className='home page'>
      <form onSubmit={handleSignIn}>
        <label>
                Email
          <input value={email} type='email' name='email' onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
                Password
          <imput value={password} type='password' name='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

