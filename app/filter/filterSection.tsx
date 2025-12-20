'use client';

import styles from './filter.module.css';
import { submitFilterForm } from '../lib/actions';

export default function FilterSection() {

  function formData(e:FormData) {
    submitFilterForm(e)
  }

  return (
    <form id='filterForms' action={formData} className={styles['filter-form']}>
      <h3>Filters</h3>
      <label>Roles</label>
      <div className={styles['roles-container']}>
        <div className={styles['role-option']}>
          <input type="checkbox" id="developer" name="developer" value="developer"/>
          <label>Developer</label>
        </div>
        <div className={styles['role-option']}>
          <input type="checkbox" id="artist" name="artist" value="artist"/>
          <label>Artist</label>
        </div>
        <div className={styles['role-option']}>
          <input type="checkbox" id="composer" name="composer" value="composer"/>
          <label>Composer</label>
        </div>
      </div>

      <input type="submit" className={styles['filter-forms-button']} value="Search"/>
    </form>
  )
}