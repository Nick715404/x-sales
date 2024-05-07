import styles from './page.module.scss';

import { ISingleProduct } from "@/interfaces/interfaces";
import { getSingleProduct } from "@/api/products/products"
import WbButton from '@/components/wb-button/WbButton';

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: Props) {
  const product: ISingleProduct = await getSingleProduct(id);
  return {
    title: `30XSales || ${product.title}`
  }
}


export default async function ProductPage({ params: { id } }: Props) {

  const product: ISingleProduct = await getSingleProduct(id);

  return (
    <div className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageImgBox}>
          <img
            className={styles.img}
            src={product ? product.thumbnailPath : ''}
            alt={product.title} />
        </div>
        <div className={styles.pageTextContent}>
          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.rating}>{product.rating} / 5</span>
          <p className={styles.text}>{product.body}</p>
          <WbButton href='/' />
        </div>
      </div>
    </div>
  )
}