import styles from './Posts.module.scss';

import Post from '../post/Post';

type Props = {
  data: any,
  filtered: boolean,
  color?: string,
  title?: string
}

export default function Posts({ data, filtered, title, color }: Props) {
  return (
    <div className={styles.posts}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {filtered ? data && data.map((post: any) => (
          <Post color={color} key={post.id} post={post} />
        )).slice(0, 3) : data && data.map((post: any) => (
          <Post color={color} key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}