import { Metadata } from 'next';
import styles from './page.module.scss';

import Catalog from '@/components/catalog/Catalog';

export const metadata: Metadata = {
  title: "30XSales || Каталог",
};

export default function CatalogPage() {
  return (
    <div className='catalog'>
      <div className={styles.whiteBox}>
        <section className={styles.catalog}>
          <div className="container">
            <Catalog sortMode={false} />
          </div>
        </section>
      </div>
    </div>
  )
}