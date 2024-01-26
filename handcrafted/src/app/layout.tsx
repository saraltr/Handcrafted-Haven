import type { Metadata } from "next";
import "./ui/globals.css";
import { playpen } from '@/app/ui/fonts/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Handcrafted Haven',
    default: 'Handcrafted Haven',
  },
  description: 'Handcrafted Haven is a place for handcrafted goods.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playpen.className}`}>{children}</body>
    </html>
  );
}
