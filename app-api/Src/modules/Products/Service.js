const products = require('../../models/products');

module.exports = {
    getProduct: async function (input) {
        try {
            let condition = {}
            if(input.name) condition["name"] = { $regex: input.name, $options: "i" };
            if(input.category) condition["category"] = input.category;
            return await products.find(condition);
        } catch (error) {
            console.log("getProduct :: error",error)
        }
    }
}