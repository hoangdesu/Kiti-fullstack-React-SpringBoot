
const PORT = 8765;
const ENDPOINTS = `http://localhost:${PORT}/api/`;

module.exports = global.APIs = {
    PRODUCTS: ENDPOINTS + 'products'
};