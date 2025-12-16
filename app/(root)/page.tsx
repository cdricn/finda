'use server';

import FilterSection from '../filter/filterSection'
import styles from './page.module.css';
import FetchJams from '../api/scraper/scraper';
// import { MdViewList, MdViewQuilt  } from "react-icons/md";

export default async function Forums() {
  const gamejams = await FetchJams();


  return (
    <>
      <main className={styles['main-container']}>
        <section className={styles['filter-section']}>
          <FilterSection gamejams={gamejams} />
        </section>
        <section className={styles['content-section']}>
          <section className={styles['header-section']}>
            
          </section>
          <section className={styles['posts-section']}>
            
          </section>
        </section>
      </main>
    </>
  )
}