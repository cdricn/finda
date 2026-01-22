import styles from './page.module.css';
import FilterJams from '../filter/filterJams';
import PageMessage from '../components/pageMessage';

export default function Main() {

  return (
    <main className={styles['main-container']}>
      <section className={styles['title-section']}>
        <h1>Find a team!</h1>
        <FilterJams />
      </section>
      <section className={styles['content-section']}>
        <PageMessage 
          mainText='Nothing here.' 
          subText='Select a game jam to discover groups or members.'
        />
      </section>
    </main>
  )
}