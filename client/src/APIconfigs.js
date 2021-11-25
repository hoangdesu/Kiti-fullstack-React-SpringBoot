
const PORT = 8080;
const ENDPOINTS = `http://localhost:${PORT}/api/`;

module.exports = global.APIs = {
    PRODUCTS: ENDPOINTS + 'products'
};