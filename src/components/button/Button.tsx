import styles from './Button.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import arrow from '/public/svg/white-arrow.svg'

type Props = {
  text: string,
  href: string,
  style: 'white' | 'wb' | 'default'
}

export default function Button({ text, href, style }: Props) {

  const btnVariants = {
    default: {
      backgroundColor: '#1F1F1F',
      color: '#fff'
    },
    wildberries: {
      background: 'linear-gradient(#B009FF, #8309CD);',
      color: '#fff',
    },
    white: {
      backgroundColor: '#fff',
      color: '#1F1F1F'
    }
  }

  return (
    <Link
      style={style == 'white' ? btnVariants.white : btnVariants.default}
      className={styles.btn}
      href={`${href}`}>
      <span className={styles.text}>{text}</span>
      <Image className={styles.arrow} src={arrow} alt='' />
    </Link>
  )
}