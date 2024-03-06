import { PRODUCTS_URL, PRODUCT_URL } from './urls.js'

const idToFetch = [0, 5, 9, 22, 12, 14, 24]

const fetchGoogle = () =>
  fetch('http://google.com')
    .then((r) => r.text())
    .then(console.log)

const fetchAll = () =>
  fetch(PRODUCTS_URL)
    .then((r) => r.json())
    .then((r) => r.length)
    .then(console.log)

const fetchData = (id) =>
  fetch(PRODUCT_URL(id))
    .then((r) => r.json())
    .then(console.log)

const fetchError = () =>
  fetch(PRODUCT_URL(64))
    .then((r) => r.json())
    .then(console.log)
    .catch(console.error)

const fetchErrorUrl = () =>
  fetch('http://bonjour')
    .then((r) => r.text())
    .then(console.log)
    .catch(console.error)

const fetchList = () => idToFetch.map(fetchData)

// fetchGoogle()
// fetchAll()
// fetchData()
// fetchError()
// fetchErrorUrl()
// fetchList()
