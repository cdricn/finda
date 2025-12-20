'use server';

import FilterSection from '../filter/filterSection'
import styles from './page.module.css';
import FetchJams from '../api/scraper/scraper';
import Header from '../components/header';
// import { MdViewList, MdViewQuilt  } from "react-icons/md";

export default async function Forums() {
  const gamejams = await FetchJams();

  return (
    <main className={styles['main-container']}>
      <section className={styles['content-section']}>
        <header className={styles['header-section']}>
          <Header gamejams={gamejams} />
        </header>
        <section className={styles['posts-section']}>
          
        </section>
      </section>
      <section className={styles['filter-section']}>
        <FilterSection />
      </section>
    </main>
  )
}