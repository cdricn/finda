import styles from './filter.module.css';
import Button from '../components/button';
import FilterItem from './filterItem';

interface ItemsSelected {
  key: string | null,
  selected: boolean,
}

const roles = [ 
  {
    name: 'Programming',
    items: ['Unity', 'Godot', 'Unreal']
  },
  {
    name: 'Art',
    items: ['2D Artist', '3D Artist', 'Pixel Artist']
  },
  {
    name: 'Music',
    items: []
  }
];

export default function FilterContainer() {

  const clickedStyle = {
    backgroundColor: 'var(--button-filterOption-selected)',
    color: 'var(--button-text)'
  }

  function handleClick(index:number) {

  }

  function populateFilterSection() {
    return roles.map((role, index)=>{
    })
  }

  return (
    <>
      <h3>Filter</h3>
      {populateFilterSection()}
      <Button styleName={'filter'} text={'Search'}/>
    </>
  )
}