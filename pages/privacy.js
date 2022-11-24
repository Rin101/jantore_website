import { NextSeo } from 'next-seo';
import commonStyles from '../styles/Common.module.css'
import styles from '../styles/Privacy.module.css'

export default function Privacy() {
  return (
    <div className={commonStyles.container}>
      <NextSeo
        title="プライバシーポリシー | 雀トレ - 麻雀の教科書アプリ"
        description="雀トレのプライバシーポリシー"
      />

      <h1 className={commonStyles.pageTitle}>プライバシーポリシー</h1>
      <div className={commonStyles.pageTitleDivider}></div>

      <div className={styles.privacyContainer}>
        <p className={styles.text}>第三者に個人を特定できる情報を提供することはありません。</p>
        <p className={styles.text}>個人情報の管理には最新の注意を払い、以下に掲げた通りに扱います。</p>

        <p className={styles.label}>サポート時</p>
        <p className={styles.text}>
          サポートメールに、問題解決のための端末種類、OSバージョン等が本文として記述されます。
          個人を特定できる情報は一切送信されません。
        </p>

        <p className={styles.label}>データ解析</p>
        <p className={styles.text}>
          アプリの利便性向上のため、匿名で個人を特定できない範囲で最新の注意を払い、アクセス解析をしております。 
          例えばアプリのクラッシュ時にどんな原因でクラッシュしたかを匿名で送信して、バグの素早い修正に役立たせております。
        </p>

        <p className={styles.label}>免責事項</p>
        <p className={styles.text}>
          利用上の不具合・不都合に対して可能な限りサポートを行っておりますが、利用者が本アプリを利用して生じた損害に関して、
          開発元は責任を負わないものとします。
        </p>

      </div>

      <div style={{margin: 200}}></div>
    </div>
  )
}
