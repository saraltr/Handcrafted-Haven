"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <div className="buttonContainer">
      {/* <button
        onClick={async () => {
          await signIn(undefined, { callbackUrl: '/profile' });
        }}
        className="loginButton"
      >
        Sign In
      </button> */}
      <button>
        <Link
          href="/api/auth/login"
        >
        </Link>
      </button>

    </div>
  );
};