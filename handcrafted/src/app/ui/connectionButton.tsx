"use client"

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import styles from '@/app/ui/connectionBtn.module.css'

export default function Connection() {
  return (
    <SessionProvider>
      <ConnectionContent />
    </SessionProvider>
  );
}

function ConnectionContent() {
  const { data: session } = useSession();

  if (session) {
    const userName = session.user?.name ?? 'User';

    return (
      <div className={styles.container}>
        Signed in as {userName} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className={styles.btnContainer}>
      <button className={styles.loginBtn} onClick={() => signIn(undefined, { callbackUrl: '/seller' })} >Login Now <ArrowRightIcon className="arrowIcon" /></button>
    </div>
  );
}