import { getServerSession } from "next-auth";
import Image from "next/image";
import { LogoutButton } from "./logoutButton";
import React from 'react';
import styles from '@/app/ui/user.module.css';
import { authConfig } from "../../../pages/api/auth/[...nextauth]";
import defaultImage from "@/public/images/blank-profile-picture.png"

export const User = async () => {
    const session = await getServerSession(authConfig);

    if (!session?.user) {
        return null;
    }

    const userImage = session.user.image ?? defaultImage; 

    return (
        <div className={styles.userProfileCard}>
            <Image
                src={userImage}
                alt="user avatar"
                width={100}
                height={100}
                className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
                <h2 className={styles.userName}>{session.user.name}</h2>
                <p className={styles.userEmail}>{session.user.email}</p>
                <LogoutButton />
            </div>
        </div>
    );
};
