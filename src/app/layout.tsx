import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { db } from "./firebase";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("firebase admin db", db);
  try {
    const users_collection = db.collection("users");
    console.log("successfully read from firestore", users_collection);

    // const res = await users_collection.add(user);
  } catch (error) {
    console.log("error writing to firestore", error);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
