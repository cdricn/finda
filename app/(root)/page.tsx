import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const alternate = ['team', 'teammate', 'writer', 'developer', 'artist', 'composer'];
  let currAlternate = alternate[0];
  let letterA = currAlternate == 'artist' ? 'an' : 'a';

  return (
    <section className={styles['home-hero']}>
      <div className={styles['hero-container']}>
        <div className={styles['header-container']}>
          <div className={styles['header-wrapper']}>
            <h1>Finding {letterA} <span>{currAlternate}</span><br/> made easier.</h1>
            <p>Finda was made to make it easier to find other people to fill in the role missing in your gamejam team.</p>
          </div>
        </div>
        <div className={styles['btn-container']}>
          <div className={([styles['btn'], styles['learn-more']]).join(' ')}>
            <span>Learn More</span>
          </div>
          <div className={([styles['btn'], styles['forums']]).join(' ')}>
            <Link className="link" href="/forums">Go to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
