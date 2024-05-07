import styles from './WbButton.module.scss';

import Link from "next/link";
import Image from "next/image";
import arrow from '/public/svg/white-arrow.svg'

type Props = {
  href: string
}

export default function WbButton({ href }: Props) {

  const btnStyle = {
    background: "linear-gradient(#B009FF, #8309CD)",
    color: '#fff',
    padding: '14px 24px',
    border: 'none',
    borderRadius: '44px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content'
  }

  const textStyle = {
    paddingRight: '12px',
    marginRight: '12px',
    borderRight: '1px solid #ffffff80'
  }

  return (
    <Link
      className={styles.btn}
      href={href}>
      <span style={textStyle}>К товару на Wildeberries</span>
      <Image className={styles.img} src={arrow} alt='' />
    </Link>
  )
}