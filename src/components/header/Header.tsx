import styles from './Header.module.scss';

import Logo from "../logo/Logo"
import Navigation from '../nav/Navigation';
import Socials from '../socials/Socials';
import BurgerMenu from '../../app/_burger/BurgerMenu';

type Props = {
  bright?: boolean
}

export default function Header({ bright }: Props) {
  return (
    <header id='header' className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo mode={bright} />
          <div className={styles.content_box}>
            <Navigation />
            <Socials mode={bright} />
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}