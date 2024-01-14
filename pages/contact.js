import { NextSeo } from 'next-seo';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import commonStyles from '../styles/Common.module.css'
import styles from '../styles/Contact.module.css'

export default function Contact() {

    return (
        <div className={commonStyles.container}>
            <NextSeo
                title="お問い合わせ | 雀トレ - 麻雀の教科書アプリ"
                description="雀トレのお問い合わせページ"
            />
            <h1 className={commonStyles.pageTitle}>お問い合わせ</h1>
            <div className={commonStyles.pageTitleDivider}></div>
            <div className={styles.contact}>
                <div className={styles.contactImage}>
                    <Image height={200} width={300} priority src={'/img/contact_us.svg'} alt={'envelope'} />
                </div>
                <div className={styles.contactContent}>
                    <p className={styles.label}>お問い合わせは、下記メールアドレスにお願いいたします。</p>
                    <div className={styles.emailContainer}>
                        <div className={styles.mailIcon}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}