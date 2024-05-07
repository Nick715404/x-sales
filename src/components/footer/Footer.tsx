import styles from './Footer.module.scss';

import { footerSocials, navLinks } from '@/constans/constants';

import Link from 'next/link';
import FooterForm from '../footer-form/FooterForm';
import Image from 'next/image';
import logoImg from '/public/svg/30XSales.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.form}>
          <FooterForm />
        </div>

        <div className={styles.nav}>
          <div className="container-small">
            <div className={styles.wrapper}>
              <div className={styles.content}>

                <div className={styles.logoBox}>
                  <div className={`${styles.logo}`}>
                    <Link className={styles.link} href={'/'}>
                      <Image
                        className={styles.img}
                        src={logoImg}
                        alt='Логотип 30XSales'
                        priority
                      />
                    </Link>
                  </div>
                </div>

                <div className={styles.socials}>
                  <ul className={styles.list}>
                    {footerSocials.map(item => (
                      <li key={item.label} className={styles.item}>
                        <Link className={styles.link} href={item.href}>
                          <img className={styles.img} src={item.imgPath} alt={item.label} />
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
              <div className={styles.info}>
                <div className={styles.menu}>
                  <ul className={styles.list}>
                    <li className={styles.titleBox}>
                      <h3 className={styles.title}>Меню</h3>
                    </li>
                    {navLinks.map(link => (
                      <li className={styles.item} key={link.label}>
                        <Link className={styles.link} href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.contacts}>
                  <ul className={styles.list}>
                    <li className={styles.titleBox}>
                      <h3 className={styles.title}>Контакты</h3>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.title}>Email</span>
                      <Link className={styles.link} href='mailto:Home2stay@gmail.com'>Home2stay@gmail.com</Link>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.title}>Телефон</span>
                      <Link className={styles.link} href='tel: (505) 555-0125'>(505) 555-0125</Link>
                    </li>
                    <li className={styles.item}>
                      <span className={styles.title}>Адрес офиса</span>
                      <address className={styles.link}>6391 Elgin St. Celina, Delaware<br />10299</address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link className={styles.up} href='#header'>
            <img src="/svg/arrow-up.svg" alt="" />
          </Link>
        </div>

        <div className={styles.copy}>
          <div className={styles.wrapper}>
            <span className={styles.text}>30XSales © 2024. Все права защищены.</span>
            <Link href='#' className={styles.text}>Политика конфиденциальности</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}