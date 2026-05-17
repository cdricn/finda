'use client'

import { useState } from 'react'
import styles from './selectJamType.module.css'

export default function SelectJamType({changeData}:{changeData:(type:string)=>void}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownText, setDropdownText] = useState('Ongoing');

  function onSelectionClick(value:string) {
    const text = value.slice(0, 1).toUpperCase() + value.slice(1)
    setDropdownText(text);
    changeData(value);
  }

  const hideDropdown = {
    display: 'none'
  }

  const setDropdownButtonColor = {
    border: '1px solid var(--color-itch)',
    backgroundColor: 'var(--color-itch-light)',
    color: 'white',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  }

  return (
    <>
      <div className={styles['button']} 
        onClick={()=>setIsExpanded(!isExpanded)}
        style={isExpanded ? setDropdownButtonColor : undefined}>
          <span>{dropdownText}</span>
          <span></span>
          <div className={styles['dropdown']} style={isExpanded ? undefined : hideDropdown}>
            <span onClick={()=>onSelectionClick('ongoing')}>Ongoing</span>
            <span onClick={()=>onSelectionClick('upcoming')}>Upcoming</span>
          </div>
      </div>
    </>
  )
}