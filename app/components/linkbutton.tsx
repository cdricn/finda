import Link from 'next/link';
import styles from './button.module.css';

type StyleKeys = 'about' | 'posts';

export default function LinkButton({styleName, text, link} : {
  styleName: StyleKeys, 
  text: string,
  link: string
}) {

  let style = {
    about: {
      padding: '15px 35px 15px 35px',
      backgroundColor: 'var(--button-secondary)',
    },
    posts: {
      padding: '15px 35px 15px 35px',
      backgroundColor: 'var(--button-brand)',
    }
  };

  return (
    <button type="submit" className={styles['button']} style={style[styleName]}>
      <Link href={link}>{text}</Link>
    </button>
  )
}