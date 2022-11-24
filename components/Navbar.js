import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [isMenuShown, setIsMenuShown] = useState(false)
  const menuWidth = "50vw"

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/"><h1>雀トレ</h1></Link>
      </div>
      <div className={styles.menuButton} onClick={() => setIsMenuShown(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={styles.menu} style={{right: isMenuShown? 0 : "-"+menuWidth}}>
        <div className={styles.closeButtonContainer}>
          <div className={styles.closeButton} onClick={() => setIsMenuShown(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className={styles.menuItemContainer}>
          <Link href={"/"}><p className={styles.menuItemText} onClick={() => setIsMenuShown(false)}>雀トレって何?</p></Link>
          <Link href={"/about"}><p className={styles.menuItemText} onClick={() => setIsMenuShown(false)}>お問い合わせ</p></Link>
          <Link href={"/about"}><p className={styles.menuItemText} onClick={() => setIsMenuShown(false)}>運営会社</p></Link>
        </div>
      </div>
    </div>
);
}

export default Navbar;