import styles from './styles.module.css'

export function ShippingBanner () {
  return (
    <div className={styles.shoppingBanner}>
      <div className='shopping-bar container-lg'>
        <ul className='shopping-banner'>
          <li className='banner-item'>
            <div className='banner-icon'>
              <div className='text-with-icon'>
                <i className='fas fa-truck icon'></i>
                <div className='p-gc23v2-icon-text'>
                  <p>Free shipping</p>
                </div>
              </div>
            </div>
          </li>
          <li className='banner-item'>
            <div className='banner-icon'>
              <div className='text-with-icon'>
                <i className='far fa-clock icon'></i>
                <div className='p-gc23v2-icon-text'>
                  <p>2-5 business day delivery</p>
                </div>
              </div>
            </div>
          </li>
          <li className='banner-item'>
            <div className='banner-icon'>
              <div className='text-with-icon'>
                <i className='fas fa-redo-alt icon'></i>
                <div className='p-gc23v2-icon-text'>
                  <p>30 days return guarantee</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
