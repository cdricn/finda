import styles from './page.module.css';
import FilterJams from '../filter/filterJams';
import FilterTags from '../filter/filterTags';
import Posts from '../posts/posts';
import PageInfo from '../pageInfo/pageInfo';

export default function PostsPage() {

  return (
    <>
      <main className={styles['main-container']}>
        <section className={styles['title-section']}>
          <PageInfo />
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