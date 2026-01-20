import styles from './page.module.css';
import FilterJams from '../filter/filterJams';
import FilterTags from '../filter/filterTags';
import Posts from '../posts/posts';

export default function PostsPage() {

  return (
    <>
      <main className={styles['main-container']}>
        <section className={styles['title-section']}>
          <FilterJams />
          <FilterTags />
        </section>
        <section className={styles['content-section']}>
          <Posts />
        </section>
      </main>
    </>
  )
}