const Service = require('./Service');

module.exports = {
    list_grocery: async function (req, res) {
        try {
            let input = req.query;
            console.log("list_grocery ::input", input)
            let data = await Service.getProduct(input);
            res.json({ status: true, data: data });
        } catch (error) {
            console.log("list_grocery ::error", error)
            res.json({ status: false, error: error });

        }
    }
}