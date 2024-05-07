import styles from './layout.module.scss';

import Reviews from "@/components/reviews/Reviews";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutBox}>
        <div className="container-small">
          {children}
          <Reviews />
        </div>
      </div>
    </div>
  )
}