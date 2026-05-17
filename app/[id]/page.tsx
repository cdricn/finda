import styles from './page.module.css';
import FilterTags from '../filter/filterTags';
import PageInfo from './pageInfo/pageInfo';
import PagePosts from './pagePosts/pagePosts';
import { Suspense } from 'react';
import Link from 'next/link';

export default async function PostsPage({params}:{params: Promise<{ id: string }>}) {
  const paramID = await params;

  return (
    <main className={styles['main-container']}>
      <div className={styles['wrapper']}>
        <Link href='/' className={styles['back-button']}></Link>
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