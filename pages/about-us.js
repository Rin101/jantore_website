import { NextSeo } from 'next-seo';
import Image from 'next/image'
import commonStyles from '../styles/Common.module.css'
import styles from '../styles/About.module.css'

const getAge = () => {
    const birthday = {year:2005, month:3, date:14}
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const isBeforeBirthday = (month < birthday.month) || (month == birthday.month && date < birthday.date)
    let age = 17
    if (isBeforeBirthday) {
        age = (year - birthday.year) - 1
    } else {
        age = year - birthday.year
    }
    return age
}

export default function About() {

    return (
        <div className={commonStyles.container}>
            <NextSeo
                title="運営会社 | 雀トレ - 麻雀の教科書アプリ"
                description="雀トレの運営会社情報"
            />
            <h1 className={commonStyles.pageTitle}>About Us</h1>
            <div className={commonStyles.pageTitleDivider}></div>
            <div className={styles.aboutMe}>
                <div className={styles.avatarContainer}>
                    <Image height={100} width={100} src={'/img/male_avatar.svg'} alt={'male avatar'} />
                </div>
                <p className={styles.myName}>RIN</p>
                <p className={styles.myRealName}>柏原 凛太郎 / Rintaro Kashiwabara</p>
                <p className={styles.myPosition}>Founder / CEO</p>
                <p className={styles.myInfo}>{ getAge() }歳・東京在住</p>
            </div>
            <div className={styles.contact}>
                <p className={styles.contactText}>メールアドレス</p>
                <p className={styles.contactInfo}>wayoftheforce101@gmail.com</p>
                {/* <p>portfolio: <a href='https://rin-portfolio.vercel.app/'>rin-portfolio.vercell.app</a></p> */}
            </div>
        </div>
    )
}