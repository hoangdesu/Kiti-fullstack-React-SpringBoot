
const PORT = 8765;
const ENDPOINTS = `http://localhost:${PORT}/api/`;

module.exports = global.APIs = {
    home: `http://localhost:${PORT}/`,
    get: {
        home: ENDPOINTS + '/',
        products: ENDPOINTS + 'products'
    },
    post: {
        products: ENDPOINTS + 'products/add'
    }
};