const Service = require('./Service');

module.exports = {
    signIn: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.getCategories(input);
            res.json({ status: true, data: data });
        } catch (error) {
            console.log("list_grocery ::error", error)
            res.json({ status: false, error: error });

        }
    },
    signUp: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.SignUp(input);
            res.json({ status: true, data: data });
        } catch (error) {
            console.log("list_grocery ::error", error)
            res.json({ status: false, error: error });

        }
    }
}