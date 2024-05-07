'use client';

import styles from './Navigation.module.scss';
import Link from 'next/link';
import { navLinks } from '@/constans/constants';
import { INavLink } from '@/interfaces/interfaces';
import { handlerClassName } from '@/utils/class.util';
import { usePathname } from 'next/navigation';

export default function Navigation() {

  const path = usePathname();
  const Component = handlerClassName(styles);
  const className = Component();

  return (
    <nav className={`${className} ${styles.nav}`}>
      <ul className={styles.list}>
        {navLinks.map((link: INavLink) => {
          const isActive = path === link.href;
          return (
            <li key={link.label} className={styles.item}>
              <Link className={isActive ? styles.active : styles.link} href={link.href}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
