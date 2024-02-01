import { Metadata } from "next";
import "./ui/globals.css";
import { playpen } from '@/app/ui/fonts/fonts';
import Link from 'next/link';
import { UserProvider } from '@auth0/nextjs-auth0/client';
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
    <html lang="en">
      <UserProvider>
      <body className={`${playpen.className}`}>
        <div className={styles.pageWrapper}>
          {children}
          <footer className={styles.footerContainer}>
            <div className="footer-container">
              <Link href="/footer/terms">Terms and Conditions</Link>
              <Link href="/footer/privacy">Privacy Policy</Link>
              <Link href="/footer/faq">FAQs</Link>
            </div>
          </footer>
        </div>
      </body>
      </UserProvider>
    </html>
  );
}