import axios from 'axios'

export function getHomeProducts () {
  return [
    {
      ctn: 'HX9957/51',
      descriptor: 'Sonic electric toothbrush with app',
      productTitle:
        'Sonicare DiamondClean Smart 9700 Sonic electric toothbrush with app',
      locale: 'en_US',
      catNme: 'Electric toothbrushes',
      catCode: 'TOOTHBRUSHES_CA',
      grpNme: 'Personal care',
      grpCode: 'PERSONAL_CARE_GR',
      brandName: 'Sonicare',
      familyName: 'DiamondClean Smart 9700',
      imageURL:
        'https://images.philips.com/is/image/PhilipsConsumer/HX9957_51-IMS-en_US'
    },
    {
      ctn: 'HY1200/08',
      descriptor: 'Power Toothbrush',
      productTitle: 'Philips One by Sonicare Power Toothbrush',
      locale: 'en_US',
      catNme: 'Electric toothbrushes',
      catCode: 'TOOTHBRUSHES_CA',
      grpNme: 'Personal care',
      grpCode: 'PERSONAL_CARE_GR',
      brandName: 'Philips',
      familyName: 'Philips One by Sonicare',
      imageURL:
        'https://images.philips.com/is/image/PhilipsConsumer/HY1200_08-IMS-en_US'
    },
    {
      ctn: 'S9031/90',
      descriptor: 'Wet and dry electric shaver',
      productTitle: 'Shaver series 9000 Wet and dry electric shaver',
      locale: 'en_US',
      catNme: 'FACE Shavers',
      catCode: 'MENS_SHAVING_CA',
      grpNme: 'Personal care',
      grpCode: 'PERSONAL_CARE_GR',
      brandName: 'Philips',
      familyName: 'Shaver series 9000',
      imageURL:
        'https://images.philips.com/is/image/PhilipsConsumer/S9031_90-IMS-en_US'
    },
    {
      ctn: 'HD9654/96',
      descriptor: 'Airfryer XXL',
      productTitle: 'Premium Airfryer XXL',
      locale: 'en_US',
      catNme: 'Cooking',
      catCode: 'COOKING_CA',
      grpNme: 'Household products',
      grpCode: 'HOUSEHOLD_PRODUCTS_GR',
      brandName: 'Philips',
      familyName: 'Premium',
      imageURL:
        'https://images.philips.com/is/image/philipsconsumer/9b61353f84f845809dcead2600c48a54'
    }
  ]
}

export async function getProductSummary (ctn) {
  const url = `https://dev.philips.com/prx/product/B2C/en_US/CONSUMER/products/${ctn}.marketing`
  let res
  try {
    res = await axios.get(url)
  } catch (err) {
    console.log('getProductSummary error', err)
    //console.log(err)
  }
  console.log('res', res, url)

  const resData = res ? (res.data ? res.data : res) : {}

  return resData && resData.success ? resData.data : {}
}

export async function getBazaarVoiceData (ctn) {
  const productId = ctn.replace('/', '_')
  const url = `https://api.bazaarvoice.com/data/reviews.json?Include=Products&apiversion=5.4&passkey=cakZijn4UobxFSYPazknMq6XslRF499jSSLk7CCZ68rts&FilteredStats=Reviews&Sort=relevancy:A1&Limit=100&Filter=ProductId%3A${productId}&Filter=ContentLocale%3Aen_US`

  let res
  try {
    res = await axios.get(url)
  } catch (err) {
    console.log('getBazaarVoiceData error', err)
  }

  const resData = res ? (res.data ? res.data : res) : null

  return resData
}

export async function getRetailData (ctn) {
  const url = `https://www.philips.com/api/wtb/v1/B2C/en_US/online-retailers?product=${ctn}`

  let res
  try {
    res = await axios.get(url)
  } catch (err) {
    console.log('getBazaarVoiceData error', err)
  }

  const resData = res ? (res.data ? res.data : res) : {}
  const wrbresults = resData ? (resData.wrbresults ? resData.wrbresults : resData) : {}

  return wrbresults
}
