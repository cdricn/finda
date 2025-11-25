import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LinkButton from "../components/linkbutton";
import GetJams from "../api/scraper/scraper";

export default async function Home() {
  const alternate = ['team', 'teammate', 'writer', 'developer', 'artist', 'composer'];
  let currAlternate = alternate[0];
  let letterA = currAlternate == 'artist' ? 'an' : 'a';

  const test = await GetJams();
  console.log(test);

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
          <LinkButton styleName={'about'} text={'Learn More'} link={"./"}/>
          <LinkButton styleName={'posts'} text={'Go to Home'} link={"/posts"}/>
        </div>
      </div>
    </section>
  );
}
