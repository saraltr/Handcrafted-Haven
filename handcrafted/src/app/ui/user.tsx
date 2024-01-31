import { authConfig } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { LogoutButton } from "./logoutButton";
import React from 'react';
import styles from '@/app/ui/user.module.css'


export const User = async () => {
    const session = await getServerSession(authConfig)

    if(!session?.user) {
        return null;
    }

    return (
         <div className={styles.userProfileCard}>
            <Image
                    src={session.user.image}
                    alt="user avatar"
                    width={100}
                    height={100}
                    className={styles.userAvatar}
                />
        {/* <img className={styles.userAvatar} src={session.user.image} alt="user avatar" /> */}
        <div className={styles.userInfo}>
            <h2 className={styles.userName}>{session.user.name}</h2>
            <p className={styles.userEmail}>{session.user.email}</p>
            <LogoutButton />
        </div>
        </div>
    )
}