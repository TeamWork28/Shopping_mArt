const Service = require('./Service');

module.exports = {
    addCart: async function (req, res) {
        try {
            let input = req.body;
            input["userId"] = req.user.userId;
            if(!input.userId || !input.productId || !input.quantity)
                res.json({status:false, message:"Parameter missing"});
            let data = await Service.addCart(input);
            res.json(data);
        } catch (error) {
            console.log("Cart ::error", error)
            res.json({ status: false, error: error });

        }
    },
    getCart: async function (req, res) {
        try {
            let input = {};
            input["userId"] = req.user.userId;
            let data = await Service.getCart(input);
            res.json(data);
        } catch (error) {
            console.log("Cart ::error", error)
            res.json({ status: false, error: error });

        }
    },
    removeCart: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.getCategories(input);
            res.json(data);
        } catch (error) {
            console.log("Cart ::error", error)
            res.json({ status: false, error: error });

        }
    },
    updateCart: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.getCategories(input);
            res.json(data);
        } catch (error) {
            console.log("Cart ::error", error)
            res.json({ status: false, error: error });

        }
    },
    placeOrder: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.getCategories(input);
            res.json(data);
        } catch (error) {
            console.log("Cart ::error", error)
            res.json({ status: false, error: error });

        }
    }
}