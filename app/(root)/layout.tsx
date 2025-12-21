import Navbar from "../components/navbar";
import FetchJams from '../api/scraper/scraper';

export default function Layout({children} : Readonly<{children: React.ReactNode}>) {
  const gamejamsPromise = FetchJams();

  return (
    <>
      {children}
    </>
  )
}