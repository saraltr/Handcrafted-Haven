"use client"

import { signIn } from "next-auth/react"

export const LoginButton = () => {
  return (
    <div className="buttonContainer">
      <button
        onClick={async () => {
          await signIn(undefined, { callbackUrl: '/profile' });
        }}
        className="loginButton"
      >
        Sign In
      </button>
    </div>
  );
};