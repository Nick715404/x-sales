'use client'

import styles from './LastPost.module.scss';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/svg/white-arrow.svg'
import { IPost } from '@/interfaces/interfaces';

type Props = {
  data: IPost[]
}

export default function LastPost({ data }: Props) {
  const [post, setLastPost] = useState<IPost | undefined>();
  const [loading, setLoading] = useState('Загружаю данные...');

  useEffect(() => {
    setLastPost(() => data && data.pop());
    setLoading('');
  }, []);

  return (
    <>
      {post ? (
        <div className={styles.lastPost}>
          <div className={styles.imgBox}>
            <img className={styles.img} src={post.thumbnailPath} alt={post.title} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.text}>{post.subTitle.slice(0, 200)}</p>
            <Link className={styles.btn} href={`/blog/${post.id}`}>
              <span className={styles.linkText}>Подробнее</span>
              <Image className={styles.arrow} src={arrow} alt='' />
            </Link>
          </div>
        </div>
      ) : (
        <h1>{loading}</h1>
      )}
    </>
  );
}
