import styles from './MobileNav.module.scss';

import Link from "next/link";
import Image from "next/image";

import Facebook from '/public/svg/twitter-white.svg';
import Instagramm from '/public/svg/inst-white.svg';
import Youtube from '/public/svg/youtube-white.svg';
import { IMobileNavImages, MobileNavProps } from '@/interfaces/interfaces';


export default function MobileNav({ openMenu }: MobileNavProps) {

  const images: IMobileNavImages = {
    facebook: Facebook,
    inst: Instagramm,
    youtube: Youtube
  };

  return (
    <>
      <div className={`${styles.menu} ${openMenu ? styles.open : ''}`} >
        <div className="container mobile-menu__container">
          <div className={styles.wrapper}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link} href={'/'}>Главная</Link>
              </li>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link} href={'/'}>О нас</Link>
              </li>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link} href={'/'}>Каталог</Link>
              </li>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link} href={'/'}>Блог</Link>
              </li>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link} href={'/'}>Контакты</Link>
              </li>
            </ul>
            <div className={styles.bottom_content}>
              <div className={styles.bottom_content_socials}>
                <span className={styles.bottom_content__text}>Мы в соц. сетях</span>
                <div className={styles.bottom_content__socials_list}>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <Link className={styles.link} href={'/'}>
                        <Image className={styles.img} src={images.facebook} alt='' />
                      </Link>
                    </li>
                    <li className={styles.item}>
                      <Link className={styles.link} href={'/'}>
                        <Image className={styles.img} src={images.inst} alt='' />
                      </Link>
                    </li>
                    <li className={styles.item}>
                      <Link className={styles.link} href={'/'}>
                        <Image className={styles.img} src={images.youtube} alt='' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.bottom_content_copy}>
                <span className={styles.bottom_content_copy__text}>30XSales © 2024. Все права защищены.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}