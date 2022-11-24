import { NextSeo } from 'next-seo';
import Image from 'next/image'
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
        <div className={styles.container}>
            <NextSeo
                title="運営会社 | 雀トレ - 麻雀の教科書アプリ"
                description="雀トレの運営会社情報"
            />
            <h1 className={styles.pageTitle}>About Us</h1>
            <div className={styles.pageTitleDivider}></div>
            <div className={styles.aboutMe}>
                <div className={styles.avatarContainer}>
                    <Image height={100} width={100} src={'/img/male_avatar.svg'} alt={'male avatar'} />
                </div>
                <p className={styles.myName}>RIN</p>
                <p className={styles.myRealName}>柏原 凛太郎 / Rintaro Kashiwabara</p>
                <p className={styles.myPosition}>Founder / CEO</p>
                <p className={styles.myInfo}>17歳・東京在住・起業家集団H.A.Dのリーダー / I&apos;m { getAge() }, Currently in Tokyo, Leader of H.A.D</p>
            </div>
            <div className={styles.contact}>
                <p className={styles.contactText}>Contact</p>
                <p className={styles.contactInfo}>wayoftheforce101@gmail.com</p>
                <p className={styles.contactInfo}>090-9292-4912</p>
                {/* <p>portfolio: <a href='https://rin-portfolio.vercel.app/'>rin-portfolio.vercell.app</a></p> */}
            </div>
        </div>
    )
}