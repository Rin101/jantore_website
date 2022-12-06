import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Link href="/">雀トレ</Link>
        </div>
        <div className={styles.badges}>
          <p className={styles.badgeText}>ダウンロードはこちら</p>
          <div className={styles.badgeImgWrapper}>
            <div className={styles.appStoreBadge}>
              <a href="https://play.google.com/store/apps/details?id=com.rinrinrinrin.jantore&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
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
        <div className={styles.footerLink}>
          <Link href="/">雀トレって？</Link>
        </div>
        <div className={styles.linkDivider}></div>
        <div className={styles.footerLink}>
          <Link href="/contact">ヘルプ・お問い合わせ</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="/terms-of-use">利用規約</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="/privacy">プライバシー</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="/about-us">運営会社</Link>
        </div>
        <div className={styles.linkDivider}></div>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>©2022 RIN</p>
        </div>
      </div>
    );
  }
   
  export default Footer;