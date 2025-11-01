import Link from "next/link"
import Image from "next/image"
import { auth, signOut, signIn } from "@/auth"
import { sign } from "crypto";
import GitHub from "next-auth/providers/github";
import styles from './Navbar.module.css';

export default async function Navbar() {
  const session = await auth();
  console.log(session)

  return (
    <header className={styles['navbar-container']}>
      <nav className={styles['navbar-flex']}>
        <Link href="/">
          <Image src="" alt="Logo"/>
        </Link>

        <div className={styles['nav-links']}>
          <Link className="link" href="/forums">Home</Link>
          <Link className="link" href="/">GameJams</Link>
          <Link className="link" href="https://github.com/cdricn/finda">GitHub</Link>
        </div>

        <div className={styles['button-container']}>
          {session && session?.user ? (
            <div className={styles['']}>
              <span>{session?.user?.name}</span>
              <form action={async() => {
                "use server";
                await signOut({redirectTo: "/"});
              }}>
                <button type="submit" className={styles['button']}>
                  <span>Logout</span>
                </button>
              </form>
            </div>
          ) : (
            <form action={async() => {
              "use server";
              await signIn('github');
            }}>
              <button type="submit" className={styles['button']}>
                <span>Sign In</span>
              </button>
            </form>
          )
          }
        </div>
      </nav>
    </header>
  )
}