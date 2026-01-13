'use client';
import styles from './filter.module.css';
import Header from '../components/header';
import FilterJams from './filterJams';
import FilterTags from './tag';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { TagType, GameJam } from '../lib/interface';

export default function FilterLayout() {
  const [tags, setTags] = useState<TagType>({
    all: true,
    developer: false,
    artist: false,
    composer: false
  })
  const [selectedJam, setSelectedJam] = useState<GameJam>({
    title: '',
    url: '',
    members: 0,
    deadline: '',
    host: ''
  });
  const router = useRouter();

  useEffect(()=>{
    const routerTagsArray = [];
    // Push active tags into the router tags array
    for(const item in tags) {
      if(tags[item]) {
        routerTagsArray.push(item);
      } 
    }

    // Push tags into router
    if(tags.all || routerTagsArray.length==0) {
      router.push("/");
    } 
    else {
      router.push("?tags="+ routerTagsArray)
    }
  }, [selectedJam, tags])

  function handleClick(tag:string) {
    setTags(prev=>{
      if(tag === 'all') {
        return {
          all: true,
          developer: false,
          artist: false,
          composer: false
        }
      }
      else {
        return {...prev, all: false, [tag]:!tags[tag]}
      }
    })
  }

  function onChange(newSelectedJam:GameJam) {
    setSelectedJam(newSelectedJam);
  }
  
  return (
    <div>
      <Header jamDetails={selectedJam}/>
      <FilterJams onChange={onChange}/>
      <FilterTags tags={tags} handleClick={handleClick}/>
    </div>
  )
}