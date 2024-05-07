import styles from './Products.module.scss';

import { IProducts } from "@/interfaces/interfaces";
import { getAllProducts } from "@/api/products/products";

import Product from "../product/Product";

type Props = {
  filtered: boolean
}

export default async function Products({ filtered }: Props) {
  const products = await getAllProducts();
  return (
    <div className={styles.grid}>
      {filtered ? products && products.slice(0, 8).map((product: IProducts) =>
        <Product key={product.id} product={product} />
      ) : products && products.map((product: IProducts) =>
        <Product key={product.id} product={product} />
      )}
    </div>
  )
}

