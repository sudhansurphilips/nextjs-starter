import styles from './layout.module.css'
import { TopBanner } from './TopBanner'
import { ShippingBanner } from './ShippingBanner'
import FirstLevelMenu from './FirstLevelMenu'

export default function Header () {
  return (
    <div className="container-fluid" className={styles.headerContainer}>
      <header className={styles.header}>
        <TopBanner />
        <ShippingBanner />
        <FirstLevelMenu/>
      </header>
    </div>
  )
}
