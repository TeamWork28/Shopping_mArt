const products = require('../../models/products');

module.exports = {
    SignIn: async function (input) {
        try {
            return await products.distinct("category");
        } catch (error) {
            console.log("getProduct :: error", error)
        }
    },
    SignUp: async function (input) {
        try {
            return await products.distinct("category");
        } catch (error) {
            console.log("getProduct :: error", error)
        }
    }
}