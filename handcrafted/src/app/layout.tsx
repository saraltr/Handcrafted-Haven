import { Metadata } from "next";
import "./ui/globals.css";
import { playpen } from '@/app/ui/fonts/fonts';
import Link from 'next/link';
import Copyright from './footer/Copyright';
import styles from './footer/footer.module.css'

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
    <html lang="en">
      <body className={`${playpen.className}`}>
        {children}
        <footer className={styles.footerContainer}>
          <Link href="/footer/terms">Terms and Conditions</Link>
          <Link href="/footer/privacy">Privacy Policy</Link>
          <Link href="/footer/faq">FAQs</Link>
          <Copyright />
        </footer>
      </body>
    </html>
  );
}