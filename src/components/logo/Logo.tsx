'use client'

import styles from './Logo.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '/public/svg/30XSales.svg'
import { handlerClassName } from '@/utils/class.util';

type Props = {
  mode?: boolean
}

export default function Logo({ mode }: Props) {

  const alt = 'Логотип сайта 30Xsales'
  const Component = handlerClassName(styles);
  const className = Component();

  return (
    <div
      className={`${styles.logo} ${className}`}>
      <Link className={styles.link} href={'/'}>
        <Image
          style={mode ? { filter: 'invert(100%)' } : {}}
          className={styles.img}
          src={logoImg}
          alt={alt}
          priority
        />
      </Link>
    </div>
  )
}