import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Add import for react
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] }); // importing a font?

export const metadata: Metadata = {
  title: "Sergio - Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <div className="flex flex-col min-h-screen">
          <header className=" text-black p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                Under construction!
              </Link>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-gray-300">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className=" text-black p-4">
            <div className="container mx-auto text-center">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
