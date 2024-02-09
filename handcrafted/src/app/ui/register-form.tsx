'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('User registered with:', { firstName, lastName, email, password });
  };

  return (
    <div>
      <h2>Welcome back!</h2>
      <p>Register to create an account:</p>
      <form id="registrationForm">
        <label>
          First Name:
          <input type="text" minLength={2} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" required placeholder="Enter a valid email address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password (At least 7 characters, including uppercase, lowercase, and a number):
          <input
            type="password"
            value={password} pattern="^(?=.*\d)(?=.*\W)(?=.*[A-Z])(?=.*[a-z]).{8,}$" minLength={7} required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br/>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <Link href="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default RegisterForm;
