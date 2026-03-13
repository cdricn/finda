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
          Findateam collects community forum posts that are looking for teams and members from
          popular itch.io game jams. <br/><br/>
          Findateam also allows you to filter posts based on the roles you want or need,
          making the search for members easier.
        </p>
        <div className={styles['search-container']}>
          <div>
            <FilterJams />
          </div>
          <span className={styles['note']}>
            *Game jams with less than 300 participants are not included.
          </span>
        </div>
      </section>
    </main>
  )
}