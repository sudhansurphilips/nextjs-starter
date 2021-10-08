import styles from './styles.module.css'
import { BsX } from 'react-icons/bs'

export function TopBanner () {
  return (
    <div className={styles.notificationBar}>
      <span className='p-text p-direction-ltr align-middle'>
        <label className='p-label'>This page is also available in</label>
        <a
          data-track-type='track-conversion'
          data-track-name='interaction'
          data-track-description='link:geo_detection'
          className='p-anchor-geobar'
          href='https://www.philips.co.in/'
        >
          India (English)
        </a>
      </span>
      <span className={styles.btnContainer}>
        <button
          className='btn btn-transparent close-btn p-0 pr-0 align-middle'
          className={styles.closeBtn}
          aria-label='Close'
        >
          <BsX />
        </button>
      </span>
    </div>
  )
}
