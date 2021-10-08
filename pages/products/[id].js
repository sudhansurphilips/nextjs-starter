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
  const {query} = ctx;
  const {id} = query
  /* const productData = await getProductSummary(id)
  console.log('productData', productData)
  const bazarVoice = await getBazaarVoiceData(id) 
  console.log('id', id)
  console.log('bazarVoice', bazarVoice)  */
  return { ctn:id }
}

export default Product
