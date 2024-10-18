import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Siva Chandu Mallala",
  description: "Welcome to my Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <main className="p-5 w-full overflow-x-hidden flex-1 text-center">
        <Navbar/>
        {children}
        </main>
      </body>
    </html>
  );
}
