import styles from './page.module.css';
import FilterTags from '../filter/filterTags';
import PageInfo from './pageInfo/pageInfo';
import PagePosts from './pagePosts/pagePosts';
import { Suspense } from 'react';
import Link from 'next/link';
import { SearchParams } from 'next/dist/server/request/search-params';

export default async function PostsPage({
  params, 
  searchParams
}:{
  params: Promise<{ id: string }>, 
  searchParams: SearchParams
}) {
  
  const paramID = await params;
  const resolvedParams = await searchParams;
  let searchArray : Array<string> = [];
  
  if (resolvedParams !== undefined) {
    if (typeof resolvedParams.tags === 'string') {
      searchArray.push(resolvedParams.tags)
    } else if (typeof resolvedParams.tags === 'object') {
      searchArray = searchArray.concat(resolvedParams.tags);
    }
  }

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
            <PagePosts params={paramID.id} searchParams={searchArray}/>
          </Suspense>
        </section>
      </div>
    </main>
  )
}