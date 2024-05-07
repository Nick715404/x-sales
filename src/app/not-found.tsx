import { Metadata } from 'next';
import styles from './not-found.module.scss';

import Button from '@/components/button/Button';

export const metadata: Metadata = {
  title: "30XSales || Страница не найдена",
};

export default function PageNotFound() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.pageWrapper}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Упс... Что-то пошло не так</h2>
          <span className={styles.text}>Страницы не сущетсвует</span>
          <div className={styles.btnBox}>
            <Button text='На главную' href='/' style='default' />
          </div>
        </div>
      </div>
    </div>
  )
}