import styles from './button.module.css'

type StyleKeys = 'filter' | 'navbar';

export default function Button({styleName, text} : {
  styleName: StyleKeys, 
  text: string
}) {

  let style = {
    filter: {
      padding: '5px 20px 5px 20px',
      backgroundColor: 'var(--button-brand)',
    },
    navbar: {
      padding: '10px 20px 10px 20px',
      backgroundColor: 'var(--button-primary)',
    }
  }

  return (
    <button type="submit" className={styles['button']} style={style[styleName]}>
      <span>{text}</span>
    </button>
  )
}