"use client"

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import styles from '@/app/ui/connectionBtn.module.css'
import { useEffect } from "react";

export default function Connection() {
  return (
    <SessionProvider>
      <ConnectionContent />
    </SessionProvider>
  );
}

function ConnectionContent() {
  const { data: session } = useSession();

  useEffect(() => {
    const handleSignIn = async () => {
      await signIn(undefined, { callbackUrl: '/seller' });
    };

    const handleClick = () => {
      handleSignIn();
    };

    const loginBtn = document.getElementById('loginBtn');

    if (loginBtn) {
      loginBtn.addEventListener('click', handleClick);

      return () => {
        loginBtn.removeEventListener('click', handleClick);
      };
    }

  }, []);

  if (session) {
    const userName = session.user?.name ?? 'User';

    return (
      <div className={styles.container}>
        <p>Signed in as {userName}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className={styles.btnContainer}>
      <button id="loginBtn" className={styles.loginBtn}>
        Login Now <ArrowRightIcon className="arrowIcon" />
      </button>
    </div>
  );
}
