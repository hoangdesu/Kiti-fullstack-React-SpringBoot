
const PORT = 8765;
const ENDPOINT = `http://localhost:${PORT}/api/`;

module.exports = global.APIs = {
    home: `http://localhost:${PORT}/`,
    get: {
        home: ENDPOINT + '/',
        products: ENDPOINT + 'products'
    },
    post: {
        products: ENDPOINT + 'products/add'
    },
    put: {
        products: ENDPOINT + 'products/update/'
    },
    delete: {
        product: ENDPOINT + 'products/delete/'
    }
    
};