import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faGamepad, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title="雀トレ - 麻雀の教科書アプリ"
        description="わかりやすいレッスンで麻雀強者に生まれ変わろう! 新しい麻雀の教科書"
      />
      <div className={styles.top}>
        <div className={styles.topTextContainer}>
          <h1 className={styles.bigText}>「麻雀の教科書」</h1>
          <p className={styles.topText}>わかりやすいレッスンで<br/>強者に生まれ変わろう</p>
        </div>
        <div className={styles.badgeImgWrapper}>
          <div className={styles.appStoreBadge}>
            <a href="https://apps.apple.com/us/app/%E9%9B%80%E3%83%88%E3%83%AC-%E9%BA%BB%E9%9B%80%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8/id1660440119">
              <Image width={250} height={83} className={styles.appStoreBadgeImg} src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&amp;releaseDate=1352764800&h=3c88de21759ebc588380aab13944566f" alt="Download on the App Store" />
            </a>
          </div>
          <div className={styles.badgeImgDivider}></div>
          <div className={styles.playStoreBadge}>
            <a href='https://play.google.com/store/apps/details?id=com.rinrinrinrin.jantore&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <div className={styles.playStoreBadgeImgContainer}>
                <Image width={300} height={83} className={styles.playStoreBadgeImg} alt='Google Play で手に入れよう' src='https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png'/>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.detailItemDivider}></div>
        <div className={styles.detailItem}>
          <div className={styles.detailItemIconContainer}>
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <p className={styles.detailItemText}>簡潔なレッスン & 体系化されたコース</p>
        </div>
        <div className={styles.detailItemDivider}></div>
        <div className={styles.detailItem}>
          <div className={styles.detailItemIconContainer}>
            <FontAwesomeIcon icon={faGamepad} />

          </div>
          <p className={styles.detailItemText}>点数計算・牌姿記憶などの麻雀脳トレーニング</p>
        </div>
        <div className={styles.detailItemDivider}></div>
        <div className={styles.detailItem}>
          <div className={styles.detailItemIconContainer}>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </div>
          <p className={styles.detailItemText}>麻雀を日課にする「ジャン記録」</p>
        </div>
        <div className={styles.detailItemDivider}></div>
      </div>

      <div style={{margin: 200}}></div>
    </div>
  )
}
