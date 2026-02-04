import styles from './page.module.css';
import FilterJams from '../filter/filterJams';

export default function Main() {

  return (
    <main className={styles['main-container']}>
      <section className={styles['title-section']}>
        <h1>Find a team!</h1>
        <FilterJams />
      </section>
      <section className={styles['content-section']}>
        <p><br/>
          findateam aims to make the task of finding teams or members,
          much easier by filtering posts from popular itch.io game jams and serving them 
          to you in one place. <br/><br/>
          No more sifting through theme questions, unrelated topics, and spam. 
          Find the role you want and filter! <br/><br/>
          <span className={styles['note']}>
            *Only ranked game jams with more than 300 participants are included.
          </span>
        </p>
      </section>
    </main>
  )
}