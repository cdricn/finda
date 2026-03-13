import styles from './page.module.css';
import FilterJams from '../filter/filterJams';

export default function Main() {

  return (
    <main className={styles['main-container']}>
      <section className={styles['section']}>
        <h1 className={styles['title-section']}>
          Find a team!
        </h1>
        <p className={styles['content-section']}>
          Find people easier by filtering posts from itch.io game jams.
        </p>
        <div className={styles['search-container']}>
          <FilterJams />
          <span className={styles['note']}>
            *Game jams with less than 300 participants are not included.
          </span>
        </div>
      </section>
    </main>
  )
}