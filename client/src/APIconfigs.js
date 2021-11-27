
const PORT = 8765;
const ENDPOINTS = `http://localhost:${PORT}/api/`;

module.exports = global.APIs = {
    get: {
        server: ENDPOINTS + '/',
        products: ENDPOINTS + 'products'
    },
    post: {
        products: ENDPOINTS + 'products/add'
    }
};