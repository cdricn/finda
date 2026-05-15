'use client';
import styles from './filterTags.module.css';

type TagType = {
  tag: string;
  isActive:boolean;
  handleClick: (func: string) => void;
}

export default function Tag({ tag, isActive, handleClick }: TagType ) {

  const style = {
    backgroundColor: 'var(--color-active)',
    color: 'var(--color-text-active)'
  };
  
  return (
    <div className={styles['tag']} onClick={()=>handleClick(tag)}
      style={isActive ? style : undefined}>
      <span>{tag}</span>
    </div>
  )
}