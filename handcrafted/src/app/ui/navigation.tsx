"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/footer/footer.module.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className={styles.responsive}>
            {isOpen ? (
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span>X</span>
                </div>
            ) : (
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span>&#9776;</span>
                </div>
            )}
        </div>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.show : ''}`}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/catalog">Catalog</Link></li>
                <li><Link href="/seller">Profile</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        </>
    );
}
