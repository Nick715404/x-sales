import styles from './page.module.scss';

import { getAllPosts } from "@/api/posts/posts"
import { Metadata } from 'next';

import LastPost from "@/components/last-post/LastPost"
import Posts from '@/components/posts/Posts';
import { IPost } from '@/interfaces/interfaces';

export const metadata: Metadata = {
  title: "30XSales || Блог",
};

export default async function Blog() {

  const posts: IPost[] = await getAllPosts();

  return (
    <div className="blog">

      <section className={styles.hero}>
        <div className="container-small">
          <LastPost data={posts} />
        </div>
      </section>

      <section className={styles.news}>
        <div className="container-small">
          <Posts
            color='#010101'
            filtered={false}
            data={posts}
            title='Все новости'
          />
        </div>
      </section>

    </div>
  )
}