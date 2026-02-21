const products = require('../../models/products');

module.exports = {
    getProduct: async function (input) {
        try {
            return await products.find(input);
        } catch (error) {
            console.log("getProduct :: error",error)
        }
    }
}