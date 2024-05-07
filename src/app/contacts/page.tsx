import Link from 'next/link';
import styles from './page.module.scss';

import ContactForm from '@/components/form/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "30XSales || Контакты",
};

export default function Contacts() {
  return (
    <div id='hero' className={styles.page}>
      <div className="container-small">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Контакты</h1>
          <div className={styles.content}>
            <div className={styles.tabs}>

              <div className={styles.tab}>
                <div className={styles.tabHeading}>
                  <img src="/svg/contact-form/icons-phone.svg" alt="" />
                  <h3>Связаться</h3>
                </div>
                <span className={styles.text}>Мы работаем 24/7</span>
                <Link className={styles.text} href='tel:+79036111122'>Телефон: +7 (903)611-11-22</Link>
              </div>

              <div className={styles.tab}>
                <div className={styles.tabHeading}>
                  <img src="/svg/contact-form/icons-mail.svg" alt="" />
                  <h3>Написать нам</h3>
                </div>
                <Link className={styles.text} href='mailto:customer@exclusive.com'>Email: customer@exclusive.com</Link>
                <Link className={styles.text} href='mailto:support@exclusive.com'>Email: support@exclusive.com</Link>
              </div>

              <div className={styles.tab}>
                <div className={styles.tabHeading}>
                  <img src="/svg/contact-form/icons-address.svg" alt="" />
                  <h3>Адрес</h3>
                </div>
                <Link className={styles.text} href='mailto: customer@exclusive.com'>Email: customer@exclusive.com</Link>
              </div>

            </div>
            <div className={styles.form}>
              <ContactForm mode />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}