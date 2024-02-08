import { Metadata } from "next";
import "./ui/globals.css";
import { playpen } from '@/app/ui/fonts/fonts';
import Link from 'next/link';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Copyright from './footer/Copyright'; {/*for the Copyright in the footer*/}
import styles from './footer/footer.module.css'; {/*To style the footer*/}
import Image from 'next/image'; {/*For the logo in the navbar*/}
import logo from "../../public//transparentlogo.png";
import Navigation from "./ui/navigation";

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
            {/* Navigation Bar - Adjusted to include a logo */}
            <nav className={styles.navbarContainer}>
              <div className={styles.logoContainer}>
                <Link href="/">
                  <Image src={logo} alt="Handcrafted Haven Logo" width={200} height={68} />
                </Link>
              </div>
              <Navigation></Navigation>
            </nav>
            {/* Page Content */}
            {children}
            {/* Footer */}
            <footer className={styles.footerContainer}>
              <div className={styles.footerLinks}>
                <Link href="/footer/terms">Terms and Conditions</Link>
                <Link href="/footer/privacy">Privacy Policy</Link>
                <Link href="/footer/faq">FAQs</Link>
              </div>
              <div>
                <Copyright />
              </div>
            </footer>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
