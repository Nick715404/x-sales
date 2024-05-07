import styles from './Catalog.module.scss';
import Products from '../products/Products';
import { Suspense } from 'react';
import ProductLoader from '../loaders/ProductLoader';

type Props = {
  sortMode: boolean
}

export default function Catalog({ sortMode }: Props) {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.title}>каталог</h2>
      <Suspense fallback={<ProductLoader />}>
        <Products filtered={sortMode} />
      </Suspense>
    </div>
  )
}