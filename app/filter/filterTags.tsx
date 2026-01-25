'use client'

import styles from './filterTags.module.css';
import { FaFilter } from "react-icons/fa6";
import Tag from './tag';
import type { TagState } from '../lib/interface';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


export default function FilterTags() {
  const router = useRouter();
  const searchParams = useSearchParams().getAll('tags');
  const [activeTags, setActiveTags] = useState<TagState>({
    all: false,
    developer: false,
    artist: false,
    music: false,
    writer: false,
    playtester: false
  });

  useEffect(()=>{
    let temp = {...activeTags};
    if (searchParams.length > 0 && !searchParams.includes('all')) {
      for (const p in searchParams) {
        temp = {...temp, [searchParams[p]]:true};
      }
    } else {
      temp = {...temp, all:true};
      router.push('?tags=all');
    }
    setActiveTags(temp);
    
  }, [])
  
  function handleClick(tag:string) {
    let tempTags = {...activeTags};
    let tempParams = [];
    // Check if 'all' tag is clicked 
    if(tag==='all') {
      Object.keys(tempTags).forEach((item)=>{
        tempTags[item] = item==='all' ? true : false;
      })
      router.push('?tags=all');
    }
    else {
      tempTags = {...tempTags, all:false, [tag]:!activeTags[tag]};
      
      // If no tag is active when a tag is clicked, set to all
      if (Object.values(tempTags).every(bool=>bool===false)) {
        tempTags = {...tempTags, all:true};
        router.push('?tags=all');
      } 
      else {
        for(const item in tempTags) {
          if(tempTags[item] && item!=='all') {
            tempParams.push(item);
            router.push(`?tags=`+ tempParams.join('&tags='))
          } 
        }
      }
    }
  
    // Finally, set the actual state with the result
    setActiveTags(tempTags);
  }
  
  return (
    <div className={styles['filtertags-section']}>
      <FaFilter />
      <Tag tag={'all'} isActive={activeTags.all} handleClick={handleClick}/>
      <Tag tag={'developer'} isActive={activeTags.developer} handleClick={handleClick}/>
      <Tag tag={'artist'} isActive={activeTags.artist} handleClick={handleClick}/>
      <Tag tag={'music'} isActive={activeTags.music} handleClick={handleClick}/>
      <Tag tag={'writer'} isActive={activeTags.writer} handleClick={handleClick}/>
      <Tag tag={'playtester'} isActive={activeTags.playtester} handleClick={handleClick}/>
    </div>
  )
}