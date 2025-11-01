
import Filter from './filter';
import styles from './page.module.css';

export default function Forums() {
  return (
    <>
      <div className={styles['upcoming-header']}>
        Upcoming GameJams
      </div>
      <main className={styles['main-container']}>
        <section className={styles['filter-section']}>
          <Filter />
        </section>
        <section className={styles['content-section']}>
          <div className={styles['layout-view']}>

          </div>
          <div className={styles['placeholder']}>
            
          </div>
        </section>
      </main>
    </>
  )
}