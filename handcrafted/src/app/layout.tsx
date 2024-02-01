import { Metadata } from "next";
import "./ui/globals.css";
import { playpen } from '@/app/ui/fonts/fonts';
import Link from 'next/link';
import Copyright from './footer/Copyright'; {/*for the Copyright in the footer*/}
import styles from './footer/footer.module.css'; {/*To style the footer*/}

export const metadata: Metadata = {
  title: {
    template: '%s | Handcrafted Haven',
    default: 'Handcrafted Haven',
  },
  description: 'Handcrafted Haven is a place for handcrafted goods.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.pageWrapper}> {/* This div wraps the content and the footer */}
      {children} {/* Main page content */}
      <footer className={styles.footerContainer}>
        <Link href="/footer/terms">Terms and Conditions</Link>
        <Link href="/footer/privacy">Privacy Policy</Link>
        <Link href="/footer/faq">FAQs</Link>
        <Copyright />
      </footer>
    </div>
  );
}