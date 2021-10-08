const {getHomeProducts} = require('./lib/products')

module.exports = {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    let routes = {
      '/': { page: '/' }
    }
    const products = await getHomeProducts()

    products.forEach(product => {
      routes[`/products/${product.id}`] = { page: '/products/[id]' }
    })
    return routes
  }
}
