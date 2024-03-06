const IP_ADDRESS = process.env.IP_ADDRESS

const DATA_URL = `http://${IP_ADDRESS}:1352/tig`
export const PRODUCTS_URL = [DATA_URL, 'products'].join('/')
export const PRODUCT_URL = (id) => [DATA_URL, 'product', id].join('/')
