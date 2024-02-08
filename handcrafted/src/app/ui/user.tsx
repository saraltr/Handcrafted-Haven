import { getServerSession } from "next-auth";
import Image from "next/image";
import { LogoutButton } from "./logoutButton";
import React from 'react';
import styles from '@/app/ui/user.module.css';
import formStyles from "@/app/ui/products.module.css"
import { authConfig } from "../../../pages/api/auth/[...nextauth]";
import defaultImage from "../../../public/images/blank-profile-picture.png";
import StoryForm from "./storyForm";

export const User = async () => {
    const session = await getServerSession(authConfig);

    if (!session?.user) {
        return null;
    }
    const userImage = session.user.image ?? defaultImage;
    console.log(session); 

    return (
        <section className={styles.section}>
            <h2>Welcome to Your Profile</h2>
            <p>Explore and manage your account information. Share your stories and experiences with the community.</p>
            <div className={styles.features}>
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
            <div className={formStyles.formContainer}>
                <h3>Share Your Craft Story</h3>
                <p>Share your crafting journey, tips, or your latest handmade creations!</p>
            <StoryForm userId={session.user.email}></StoryForm> 
            </div>
            </div>
        </section>

    );
};
