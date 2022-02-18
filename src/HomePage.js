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
      <h1>Movie Search</h1>
      <h2><em>Keep track of the films you watch</em></h2>
      <form onSubmit={handleSignIn}>
        <label>
                Email
          <input value={email} required type='email' name='email' onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
                Password
          <input value={password} required type='password' name='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

