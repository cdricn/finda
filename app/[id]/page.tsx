import styles from './page.module.css';
import FilterTags from '../filter/filterTags';
import PageInfo from './pageInfo/pageInfo';
import { Suspense } from 'react';
import PagePosts from './pagePosts/pagePosts';

export default async function PostsPage({params}:{params: Promise<{ id: string }>}) {
  const paramID = await params;

  return (
    <main className={styles['main-container']}>
      <a href='/' className={styles['back-button']}></a>
      <div className={styles['wrapper']}>
        <section className={styles['title-section']}>
          <Suspense fallback={<>Loading</>}>
            <PageInfo params={paramID.id}/>
          </Suspense>
          <FilterTags />
        </section>
        <section className={styles['content-section']}>
          <Suspense fallback={<>Loading</>}>
            <PagePosts params={paramID.id}/>
          </Suspense>
        </section>
      </div>
    </main>
  )
}