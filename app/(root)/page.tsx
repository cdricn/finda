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
        <p>
          <br/>
          findateam collects all posts looking for teams and members from popular 
          itch.io game jam community forums to help you with your team formation.
          <br/><br/>
          No more sifting through theme questions, unrelated topics, and spam. 
          Filter the posts based on the role you want and connect!<br/><br/>
          <span className={styles['note']}>
            *Game jams with less than 300 participants are not included.
          </span>
        </p>
      </section>
    </main>
  )
}