'use client';

import Header from '../components/header';
import FilterJams from './filterJams';
import FilterTags from './filterTags';
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
    let tempTags = tags;
    let defaultTags = {
      all: true,
      developer: false,
      artist: false,
      composer: false
    };
    
    //Check first which one is clicked
    if(tag==='all') {
      tempTags = defaultTags;
    }
    else {
      tempTags = {...tempTags, all:false, [tag]:!tags[tag]};
    }

    //Then check if all are empty
    if (Object.values(tempTags).every(bool=>bool===false)) {
      tempTags = defaultTags;
    }

    //Finally, set the actual state with the result 
    setTags(tempTags);
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