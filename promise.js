import { PRODUCTS_URL, PRODUCT_URL } from './urls.js'
const idToFetch = [0, 5, 9, 22, 12, 14, 24]

const wait = (seconds) =>
  new Promise((res, rej) => setTimeout(res, seconds * 1000))

const fetchFirstProduct = async () => {
  const res = await fetch(PRODUCTS_URL)
  console.log('status code:', res.status)
  const products = await res.json()
  return products[0]
}

const main = async () => {
  console.log('launching...')
  await wait(5)
  const product = await fetchFirstProduct()
  console.log(product)
  console.log('end')
}

main()
