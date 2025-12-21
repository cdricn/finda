import FilterSection from '../filter/filterSection';
import styles from './page.module.css';
import FetchJams from '../api/scraper/scraper';
import Header from '../components/header';
import ErrorMessage from '../components/errormessage';
import Posts from '../components/posts';

export default function Forums() {
  const fetchPromise = FetchJams();

  return (
    <main className={styles['main-container']}>
      <section className={styles['content-section']}>
        <header className={styles['header-section']}>
          <Header fetchPromise={fetchPromise} />
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