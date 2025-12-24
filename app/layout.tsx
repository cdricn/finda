import type { Metadata } from "next";
import { FetchJams } from "./api/fetch/dataFetcher";
import { FetchJamsContextProvider } from "./lib/fetchJamsContextProvider";
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
  const fetchJamsPromise = FetchJams();

  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <FetchJamsContextProvider fetchJamsPromise={fetchJamsPromise}>
          {children}
        </FetchJamsContextProvider>
      </body>
    </html>
  );
}
