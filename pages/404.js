import Link from 'next/link';
import styles from '../styles/NotFound.module.css'
import { NextSeo } from 'next-seo';

const NotFound = () => {

  return (
    <div className={styles.notFound}>
      <NextSeo
        title="ページが見つかりません | 雀トレ - 麻雀の教科書アプリ"
        description="雀トレ内のページが見つかりません"
      />

      <h1 className={styles.notFoundText}>ページが見つかりません..... :(</h1>
      <div className={styles.toHomeButton}><Link href={"/"}>トップへ</Link></div>
    </div>
  );
}
 
export default NotFound;