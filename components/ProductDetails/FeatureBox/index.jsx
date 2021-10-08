import styles from './styles.module.css'

export default function FeatureBox ({ feature }) {
    
  return (
    <div className={styles.featureBox}>
      <div className='p-feature-image pb-3'>
        <picture className='p-picture p-lazy-handled'>
          <source
            media='(min-width: 961px)'
            srcSet={`https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=305&amp;hei=173&amp;$jpglarge$,
            https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=610&amp;hei=346&amp;$jpglarge$ 2x`}
          />
          <source
            media='(min-width: 701px)'
            srcSet={`https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=305&amp;hei=173&amp;$jpglarge$,
                    https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=610&amp;hei=346&amp;$jpglarge$ 2x`}
          />
          <source
            media='(min-width: 451px)'
            srcSet={` https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=218&amp;hei=122&amp;$jpglarge$,
                    https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=436&amp;hei=244&amp;$jpglarge$ 2x`}
          />
          <source
            media=''
            srcSet={`https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=438&amp;hei=245&amp;$jpglarge$,
                    https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=876&amp;hei=490&amp;$jpglarge$ 2x`}
          />
          <img
            alt={feature.featureLongDescription}
            className=''
            src={`https://images.philips.com/is/image/PhilipsConsumer/${feature.featureCode}-FIL-global-001?wid=305&amp;hei=173&amp;$jpglarge$`}
            loading='lazy'
          />
          <noscript>
            <img
              src='https://images.philips.com/is/image/PhilipsConsumer/{{
                      feature.featureCode
                    }}-FIL-global-001?wid=305&hei=173&$jpglarge$'
              alt='{{ feature.featureLongDescription }}'
              className=''
            />
          </noscript>
        </picture>
      </div>
      <div className='p-feature-description pb-3'>
        <h3 className={styles.featureTitle}>
          {feature.featureLongDescription}
        </h3>
        <p className={styles.featureDesc}>{feature.featureGlossary}</p>
      </div>
    </div>
  )
}
