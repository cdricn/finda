export default function FilterItem() {
  return (
    <button className={styles['filter-button']} 
      style={isSelected.selected ? clickedStyle : undefined}
      onClick={()=>handleClick(i)}>
      {item}
    </button>
  )
}