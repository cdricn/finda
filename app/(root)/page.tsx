'use client'

import styles from './page.module.css';
import Posts from '../posts/posts';
import FilterLayout from '../filter/filterLayout';
import { useState } from 'react';

export default function Forums() {
  const [url, setUrl] = useState('');

  function handleJamChange(url:string) {
    setUrl(url);
  }

  return (
    <>
      <main className={styles['main-container']}>
        <section className={styles['content-section']}>
          <FilterLayout handleJamChange={handleJamChange}/>
        </section>
        <section className={styles['content-section']}>
          <Posts link={url}/>
        </section>
      </main>
    </>
  )
}