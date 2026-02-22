const Service = require('./Service');
const carts = require('../../models/carts');

module.exports = {
    addCart: async function (input) {
        try {
            const cart = await carts.findOne({ user: input.userId });

            if (!cart) {
                return await carts.create({
                    user: input.userId,
                    items: [{ product: input.productId, quantity: input.quantity }]
                });
            }

            const itemIndex = cart.items.findIndex(
                item => item.product.toString() === input.productId
            );

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += input.quantity;
            } else {
                cart.items.push({ product: input.productId, quantity: input.quantity });
            }

            return await cart.save();
        } catch (error) {
            console.log("Cart ::error", error)
            return { status: false, message: "Internal Server Error", error: error }
        }
    },
    getCart: async function (input) {
        try {
            let data = await carts.findOne({ user: input.userId })
                .populate({
                    path: "items.product",
                    select: "name price image", // only required fields
                })
                .lean();
            return { status: true, data: data };
        } catch (error) {
            console.log("Cart ::error", error)
            return { status: false, message: "Internal Server Error", error: error }

        }
    },
    removeCart: async function (input) {
        try {

        } catch (error) {
            console.log("Cart ::error", error)
            return { status: false, message: "Internal Server Error", error: error }

        }
    },
    updateCart: async function (input) {
        try {

        } catch (error) {
            console.log("Cart ::error", error)
            return { status: false, message: "Internal Server Error", error: error }

        }
    },
}