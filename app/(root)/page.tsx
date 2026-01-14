import styles from './page.module.css';
import SelectJam from '../filter/filterJams';
import ErrorMessage from '../components/errormessage';
import Posts from '../components/posts';
import FilterLayout from '../filter/filterLayout';

export default function Forums() {

  return (
    <>
      <main className={styles['main-container']}>
        <section>
          <FilterLayout />
        </section>
        <section className={styles['content-section']}>
          <Posts link={''}/>
        </section>
      </main>
    </>
  )
}