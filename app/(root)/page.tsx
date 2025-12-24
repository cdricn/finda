import FilterSection from '../filter/filterSection';
import styles from './page.module.css';
import Header from '../components/header';
import ErrorMessage from '../components/errormessage';
import Posts from '../components/posts';

export default function Forums() {

  return (
    <main className={styles['main-container']}>
      <section className={styles['content-section']}>
        <header className={styles['header-section']}>
          <Header />
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