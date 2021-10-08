import styles from './styles.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { RatingView } from 'react-simple-star-rating'
import { BsFillCartFill } from 'react-icons/bs'
import ImageGallery from 'react-image-gallery'
import * as _ from 'lodash'
import {
  getProductSummary,
  getBazaarVoiceData,
  getRetailData
} from '../../lib/products'
import FeatureBox from './FeatureBox'


const ProductDetails = ({ ctn }) => {
  //const { summary, accessories, features } = productData
  console.log('ctn', ctn)

  const [productData, setProductData] = useState({})
  const [bazarVoice, setBazarVoice] = useState({})
  const [retailData, setRetailData] = useState({})
  const [reviewSummary, setReviewSummary] = useState({})
  const [review, setReview] = useState({})
  const [features, setFeatures] = useState([])
  //console.log('reviewSummary', reviewSummary)
  //console.log('review', review)
  //console.log('bazarVoice', bazarVoice)
  //console.log('retailData', retailData)

  const getAllFeatures = count => {
    let tmpFeatures = []

    tmpFeatures = features.slice(0, count)
    return tmpFeatures
  }

  const getThumbnails = () => {
    let thumbnails = []
    if (productData && productData.assets) {
      let thumbnails = []
      const assets = productData.assets.assets.asset
      const videos = [] //_.filter(assets, { extension: 'mp4' })
      const images = _.filter(assets, { extension: 'tif' })
      thumbnails = thumbnails.concat(videos, images)
      thumbnails = thumbnails.map(img => {
        return {
          original: `${img.asset}?wid=420&hei=360&$jpglarge$`,
          thumbnail: `${img.asset}?$jpgsmall$&wid=68&hei=68`
        }
      })
      return thumbnails
    }
    return thumbnails
  }

  console.log('productData', productData, getThumbnails())

  useEffect(async () => {
    const product = await getProductSummary(ctn)
    console.log('product', product)
    setProductData(product || {})

    let features = []

    if (product) {
      product.features.keyBenefitArea.forEach(keyBenefit => {
        features = features.concat(keyBenefit.feature)
      })
    }

    setFeatures(features)

    const bazarVoiceData = await getBazaarVoiceData(ctn)
    setBazarVoice(bazarVoiceData)

    const productId = ctn.replace('/', '_')
    let currentProduct = bazarVoiceData.Includes.Products[productId]
    if (!currentProduct) {
      currentProduct = _.values(bazarVoiceData.Includes.Products)[0]
    }
    const reviewSummaryData = currentProduct.FilteredReviewStatistics
    reviewSummaryData.AverageOverallRating = parseFloat(
      reviewSummaryData.AverageOverallRating.toFixed(1)
    )
    setReviewSummary(reviewSummaryData)
    setReview(bazarVoiceData.Results[0])

    const retail = await getRetailData(ctn)
    setRetailData(retail)
  }, [])

  return (
    <div className='container-fluid'>
      {!productData && !bazarVoice && !retailData && (
        <div className='container mt-3 mb-3'>
          <p>Loading...</p>
        </div>
      )}
      <div className='container mt-3 mb-3'>
        {productData.summary && (
          <div className='row'>
            <div className='col-12 col-xm-12 col-md-12 col-lg-6'>
              <ImageGallery showPlayButton={false} items={getThumbnails()} autoPlay={true} />
            </div>
            <div className='col-12 col-xm-12 col-md-12 col-lg-6'>
              <h2 className={styles.productFamilyName}>
                {productData.summary.brandName} {productData.summary.familyName}
              </h2>
              <h3 className={styles.productDescriptor}>
                {productData.summary.descriptor}{' '}
                <span>{productData.summary.ctn}</span>
              </h3>
              <div className={styles.productRatings}>
                <span
                  title={`Overall Rating ${reviewSummary.AverageOverallRating}/5`}
                >
                  <RatingView
                    stars={5}
                    ratingValue={reviewSummary.AverageOverallRating}
                  ></RatingView>
                  <a className={styles.seeAllBenifitsRating}>
                    See all benefits
                  </a>
                </span>
              </div>
              <div className={styles.productBenifits}>
                <ul>
                  {getAllFeatures(5).map((benifit, index) => (
                    <li key={index}>
                      <span>{benifit.featureLongDescription}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href='#see-all-benefits'
                  className={styles.seeAllBenifits}
                  data-track-type='track-conversion'
                  data-track-description='link:see_all_benefits'
                  data-track-name='interaction'
                >
                  See all benefits
                </a>
              </div>
              <div className={styles.productPrice}>
                <p className={styles.philipsPrice}>Philips shop price</p>
                {retailData && retailData.ShowBuyButton === 'Y' && (
                  <button className='btn btn-warning'>
                    <BsFillCartFill />
                    Add to Cart
                  </button>
                )}
                {retailData && retailData.ShowBuyButton !== 'Y' && (
                  <p>Out of stock</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='container mt-3 mb-3'>
        {productData.summary && (
          <section className={styles.benefitsHeader}>
            <div className='p-row-gutter p-comp-spacing-bottom'>
              <h2 className='p-heading-02 p-heading-medium p-highlights-title'>
                {productData.summary.wow}
              </h2>
              <p>{productData.summary.marketingTextHeader}</p>
            </div>
          </section>
        )}
        {productData.features && (
          <div className='row'>
            {getAllFeatures(3).map((feature, index) => (
              <section key={index} className='col-sm-12 col-md-4 col-lg-4 feature-item'>
                <FeatureBox key={index} feature={feature}></FeatureBox>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
