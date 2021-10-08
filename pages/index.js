import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getHomeProducts } from '../lib/products'


const Home = ({ homeProducts }) => (
  <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container pt-3 pb-3'>
        <h5 className={utilStyles.productHead}>Most popular products</h5>
      </section>
      <section className='container'>
        <div className='row'>
          {homeProducts.map(
            ({ ctn, brandName, familyName, descriptor, productTitle, imageURL }) => (
              <div className='p-lg-1 col-sm-12 com-md-6 col-lg-3' key={ctn}>
                <div className='card'>
                <img src={`${imageURL}?&wid=183&hei=183&$jpglarge$`} className="card-img-top" alt="..."></img>
                  <div className='card-body'>
                    <h5 className='card-title min-height-5'>
                      {brandName} {familyName}
                    </h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {ctn}
                    </h6>
                    <h6 className='card-subtitle mb-2 text-muted min-height-3'>
                      {descriptor}
                    </h6>
                    <p className='card-text min-height-8'>{productTitle}</p>
                    <Link href={`/products/${encodeURIComponent(ctn)}`}>
                      <a className='card-link btn btn-warning'>View Product</a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </Layout>
);

export async function getStaticProps () {
  const homeProducts = getHomeProducts()
  return {
    props: {
      homeProducts
    }
  }
}

export default Home;
