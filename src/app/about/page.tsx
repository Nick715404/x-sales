import styles from './page.module.scss';

import { Metadata } from 'next';
import Tabs from '@/components/tabs/Tabs';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: "30XSales || О Нас",
};

export default function About() {
  return (
    <>
      <div className='about'>

        <section id='hero' className={styles.hero}>
          <div className="container">
            <div className={styles.heroWrapper}>
              <h1 className={styles.heroTitle}>Мы — команда <br />30XSales</h1>
              <p className={styles.heroText}>Деятельность нашей компании возможна благодаря коллективу талантливых и преданных профессионалов, чья страсть к моде сочетается с опытом в различных областях бизнеса. Мы гордимся тем, что наша команда обладает разнообразными навыками и экспертизой, позволяющей нам успешно управлять продажами на маркетплейсах и создавать инновационные бренды одежды.</p>
            </div>
            <div className={styles.heroImgBox}>
              <img src="/png/about-bg.png" alt="О компании 30XSales" />
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <div className="container-small">
            <div className={styles.servicesWrapper}>
              <h2 className={styles.servicesTitle}>Мы сотрудничаем,<br />чтобы:</h2>
              <div className={styles.servicesTabsBox}>
                <Tabs />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mission}>
          <div className="container-small">
            <div className={styles.missionWrapper}>
              <h2 className={styles.missionTitle}>Миссия нашей<br />компании</h2>
              <div className={styles.missionContent}>
                <div className={styles.textBox}>
                  <p className={styles.text}>Увеличить процент здоровых людей, привлечь молодое поколение к занятиям спортом, донести важность ведения здорового образа жизни. Выработать доверие со стороны потребителя, хотим завоевать лояльную базу потребителей, чтобы покупатель был уверен в качестве продукции, чтобы когда он находился на тренировке он не думал о том, как он выглядит, ведь одежда его не подведет.</p>
                </div>
                <div className={styles.textBox}>
                  <p className={styles.text}>Мы гордимся нашим разнообразием, творческим подходом к работе и стремлением к совершенству. Наш успех - результат совместных усилий, способных удовлетворить потребности клиентов в сфере моды и стиля.</p>
                  <p className={styles.text}>
                    Наша команда направлена на постоянное развитие, интеграцию новых технологий и формирование стильной, востребованной продукции.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}