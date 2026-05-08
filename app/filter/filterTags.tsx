'use client'

import styles from './filterTags.module.css';
import { FaFilter } from "react-icons/fa6";
import Tag from './tag';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


export default function FilterTags() {
  const router = useRouter();
  const searchParams = useSearchParams().getAll('tags');

  // Set to all at load
  useEffect(()=>{
    if (searchParams.length === 0) {
      router.replace('?tags=all');
    }
  }, [])
  
  // Bug: if you click tags in quick succession, it'll activate one by one, 
  // possibly because the searchparams is not updated yet.  
  function handleClick(tag:string) {
    let tempTags = [...searchParams];
    // Check if 'all' tag is clicked 
    if(tag==='all') {
      tempTags = ['all'];
    }
    else {
      if (tempTags.includes(tag)) {
        tempTags = searchParams.filter((filter) => !(filter===tag) && !(filter==='all'))
      }
      else {
        tempTags = searchParams.filter((filter) => !(filter==='all'))
        tempTags.push(tag);
      }
    }
    
    if (tempTags.length === 0) {
      tempTags = ['all'];
    }

    router.push('?tags=' + tempTags.join('&tags='));
  }
  
  return (
    <div className={styles['filtertags-section']}>
      <FaFilter />
      <Tag tag={'all'} isActive={searchParams.includes('all')} handleClick={handleClick}/>
      <Tag tag={'developer'} isActive={searchParams.includes('developer')} handleClick={handleClick}/>
      <Tag tag={'artist'} isActive={searchParams.includes('artist')} handleClick={handleClick}/>
      <Tag tag={'music'} isActive={searchParams.includes('music')} handleClick={handleClick}/>
      <Tag tag={'writer'} isActive={searchParams.includes('writer')} handleClick={handleClick}/>
      <Tag tag={'playtester'} isActive={searchParams.includes('playtester')} handleClick={handleClick}/>
    </div>
  )
}