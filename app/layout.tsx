import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const inter = localFont({
  src: './fonts/Inter-VariableFont.ttf',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Findateam | Find members easier from itch game jams!",
  description: "Find teams or members much easier by filtering posts from popular itch.io game jams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
