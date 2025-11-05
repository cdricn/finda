'use client';

import Filter from './filter';
import styles from './page.module.css';
import { MdViewList, MdViewQuilt  } from "react-icons/md";
import { useState } from 'react';

export default function Forums() {
  const [contentDisplay, setContentDisplay] = useState<String>('list')

  function onClickDisplay(e:String) {
    setContentDisplay(e);
  }

  return (
    <>
      <div className={styles['upcoming-header']}>
        Gamejams this month
      </div>
      <main className={styles['main-container']}>
        <section className={styles['filter-section']}>
          <Filter />
        </section>
        <section className={styles['content-section']}>
          <div className={styles['content-header']}>
            <h1>Posts</h1>
            <div className={styles['view-options-container']}>
              <span>View:</span>
              <div className={styles['view-option']} onClick={()=>onClickDisplay('list')}>
                <MdViewList />
              </div>
              <div className={styles['view-option']} onClick={()=>onClickDisplay('mason')}>
                <MdViewQuilt  />
              </div>
              <span>Display:</span>
              <div className={styles['display-option']} onClick={()=>onClickDisplay('list')}>
                20
              </div>
              <div className={styles['display-option']} onClick={()=>onClickDisplay('mason')}>
                30
              </div>
            </div>
          </div>
          
          <div className={styles['posts-container']}>

            <a href={'./'} className={styles['post-card']}>
              <h2>{'Looking for Artist to fill up my team spot'}</h2>
              <p>Gamejam: {'Spooky'}</p>
              <p>Tags: {'2D Artist'}</p>
              <span className={styles['divider']}></span>
            </a>

          </div>
        </section>
      </main>
    </>
  )
}