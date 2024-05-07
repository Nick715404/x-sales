import styles from './Reviews.module.scss';

import { IReview } from "@/interfaces/interfaces"
import { getAllReviews } from '@/api/reviews/reviews';
import CustomSwiper from '../swiper/Swiper';

export default async function Reviews() {

  const data: IReview[] = await getAllReviews();

  return (
    <div className={styles.reviews} style={{ background: '#fff' }}>
      <h2 className={styles.title}>Отзывы</h2>
      <CustomSwiper data={data} />
    </div>
  )
}
