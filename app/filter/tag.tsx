'use client';

import styles from './filter.module.css';

export default function Tag({tag, isActive, handleClick}:{tag: string, isActive:Boolean, handleClick:Function}) {
  function onClick() {
    handleClick(tag);
  } 

  return (
    <div className={styles['tag']} onClick={onClick}
      style={isActive ? {backgroundColor: 'var(--tag-bgcolor-active)'} : undefined}>
      <span>{tag}</span>
    </div>
  )
}