import styles from './Review.module.scss';

import { IReview } from '@/interfaces/interfaces'

type Props = {
  data: IReview
}

export default function Review({ data }: Props) {
  return (
    <div className={styles.review}>
      <div className={styles.rating}>
        Рэйтинг товара: {data.rating}
      </div>
      <div className={styles.name}>
        {data.name}
      </div>
      <div className={styles.text}>
        {data.body}
      </div>
    </div>
  )
}