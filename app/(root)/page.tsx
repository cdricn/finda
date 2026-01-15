'use client'

import styles from './page.module.css';
import Posts from '../components/posts';
import FilterLayout from '../filter/filterLayout';

export default function Forums() {

  function handleJamChange(url:string) {
    console.log('url in main',url)
  }

  return (
    <>
      <main className={styles['main-container']}>
        <section>
          <FilterLayout handleJamChange={handleJamChange}/>
        </section>
        <section className={styles['content-section']}>
          <Posts link={''}/>
        </section>
      </main>
    </>
  )
}