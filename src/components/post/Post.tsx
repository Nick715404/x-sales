import Link from 'next/link';
import styles from './Post.module.scss';
import { IPost } from '@/interfaces/interfaces';

type Props = {
  post: IPost,
  color?: string
}

export default function Post({ post, color }: Props) {
  return (
    <article className={styles.post}>
      <Link className={styles.link} href={`/blog/${post.id}`}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={post.thumbnailPath} alt={post.title} />
        </div>
        <div className={styles.content}>
          <h3 style={{ color: `${color}` }} className={styles.title}>{post.title}</h3>
          <p className={styles.subTitle}>{`${post.body.slice(0, 150)}...`}</p>
        </div>
        <div className={styles.toPost}>
          <span style={{ color: `${color}` }}>Подробнее</span>
        </div>
      </Link>
    </article>
  )
}