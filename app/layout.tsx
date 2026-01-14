import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const inter = localFont({
  src: './fonts/Inter-VariableFont.ttf',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Finda",
  description: "Filtered community posts for itch gamejams focused on finding teams.",
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
