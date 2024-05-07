import styles from './Tabs.module.scss';
import { ITabs } from '@/interfaces/interfaces';
import { tabs } from '@/constans/constants';

export default function Tabs() {
  return (
    <>
      {tabs.map((tab: ITabs) => (
        <div key={tab.id} className={styles.tab}>
          <img className={styles.img} src={tab.img} alt='' />
          <span className={styles.text}>{tab.text}</span>
        </div>
      ))}
    </>
  )
}