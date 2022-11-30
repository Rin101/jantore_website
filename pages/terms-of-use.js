import { NextSeo } from 'next-seo';
import commonStyles from '../styles/Common.module.css'
import styles from '../styles/Privacy.module.css'

export default function Privacy() {
  return (
    <div className={commonStyles.container}>
      <NextSeo
        title="利用規約 | 雀トレ - 麻雀の教科書アプリ"
        description="雀トレの利用規約"
      />

      <h1 className={commonStyles.pageTitle}>利用規約</h1>
      <div className={commonStyles.pageTitleDivider}></div>

      <div className={styles.privacyContainer}>

        <p className={styles.label}>(1)利用規約への同意</p>
        <p className={styles.text}>
            サービスを利用する場合は、利用規約への同意が必要です。
        </p>

      </div>

      <div style={{margin: 200}}></div>
    </div>
  )
}
