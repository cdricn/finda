'use client';

import styles from './filter.module.css';
import { useState } from 'react';

export default function Filter() {
  const currentGamejams = ['Spooky', 'Super', 'Brackeys']

  return (
    <>
      <section className={styles['filter-section']}>
        <span className={styles['filter-header']}>Filter</span><br/>
        <span className={styles['filter-header']}>Gamejams</span>
        <li className={styles['tags-container']}>
              {
                currentGamejams.map((val)=>{
                  return (
                    <ul className={styles['tag-option']}>
                      <input type="checkbox" id={val} name={val}/>
                      <label>{val}</label>
                    </ul>
                  )
                })
              }
        </li>
      </section>
      <section className={styles['filter-section']}>
        <span className={styles['filter-header']}>Roles</span>
        <li className={styles['tags-container']}>
          <span>Developer</span>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="unity" name="unity"/>
            <label>Unity</label>
          </ul>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="godot" name="godot"/>
            <label>Godot</label>
          </ul>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="unreal" name="unreal"/>
            <label>Unreal Engine</label>
          </ul>
          <span>Artist</span>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="artist_2d" name="artist_2d"/>
            <label>2D Artist</label>
          </ul>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="artist_pixel" name="artist_pixel"/>
            <label>2D Pixel Artist</label>
          </ul>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="artist_3d" name="artist_3d"/>
            <label>3D Artist</label>
          </ul>
          <span>Music</span>
          <ul className={styles['tag-option']}>
            <input type="checkbox" id="composer" name="composer"/>
            <label>Composer</label>
          </ul>
        </li>
      </section>
      <div className={styles['search-btn']}>
        <span>Search</span>
      </div>
    </>
  )
}