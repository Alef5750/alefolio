import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// These styles apply to every route in the application
import "./globals.css";
import Link from "next/link";

//Font Configuration; applied to <body>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Metadata for SEO
export const metadata: Metadata = {
  title: "Alef Lewitt's Web Developer Portfolio Site",
  description:
    "A host of projects, information, accomplishments, complete with the stories of what I've learned along the way. Join my journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-around">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Me</Link>
          <Link href="/projects">My Projects</Link>
          <Link href="/skills">Technical Skills</Link>
        </header>
        <main className="flex-grow p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          {children}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          {/* TODO: MAKE YEAR AUTOMATICALLY UPDATE */}
          <p>&copy; {currentYear} Alef Lewitt. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
