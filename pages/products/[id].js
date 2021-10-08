import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ProductDetails from '../../components/ProductDetails'
import { getBazaarVoiceData, getProductSummary } from '../../lib/products'
import '../../components/ProductDetails/styles.module.css'

function Product ({ ctn }) {
  return (
    <Layout>
      <Head>
        <title>Product Details</title>
      </Head>
      <ProductDetails ctn={ctn}/>
    </Layout>
  )
}

Product.getInitialProps = async ctx => {
  const {query, asPath} = ctx;
  // console.log('query', query, 'asPath', asPath)
  const {id} = query
  let ctn;
  if(!id) {
    ctn = asPath.split('/')[2]
    ctn = ctn.replace('_', '/')
  } else {
    ctn = id.replace('_', '/')
  }
  // console.log('ctn', ctn)
  
  /* const productData = await getProductSummary(id)
  console.log('productData', productData)
  const bazarVoice = await getBazaarVoiceData(id) 
  console.log('id', id)
  console.log('bazarVoice', bazarVoice)  */
  return { ctn }
}

export default Product
