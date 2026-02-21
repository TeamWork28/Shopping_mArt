const products = require('../../models/products');

module.exports = {
    getCategories: async function (input) {
        try {
            return await products.distinct("category");
        } catch (error) {
            console.log("getProduct :: error", error)
        }
    }
}