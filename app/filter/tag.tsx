'use client';
import styles from './filter.module.css';

type TagType = {
  tag: string;
  isActive:boolean;
  handleClick: (func: string) => void;
}

export default function Tag({ tag, isActive, handleClick }: TagType ) {

  const style = {
    backgroundColor: 'var(--tag-bgcolor-active)',
    color: 'var(--tag-color-active)'
  };
  
  return (
    <div className={styles['tag']} onClick={()=>handleClick(tag)}
      style={isActive ? style : undefined}>
      <span>{tag}</span>
    </div>
  )
}