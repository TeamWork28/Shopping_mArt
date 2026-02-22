const Service = require('./Service');

module.exports = {
    role: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.role(input);
            res.json({ status: true, data: data });
        } catch (error) {
            console.log("list_grocery ::error", error)
            res.json({ status: false, error: error });

        }
    },
    signIn: async function (req, res) {
        try {
            let input = req.body;
            let data = await Service.SignIn(input);
            res.json(data);
        } catch (error) {
            console.log("list_grocery ::error", error)
            res.json({ status: false, error: error });

        }
    },
    signUp: async function (req, res) {
        try {
            let input = req.body;
            if (
                !input.fullName ||
                !input.email ||
                !input.mobileNumber ||
                !input.password ||
                !input.role
            ) {
                return res.status(400).json({
                    status: false,
                    message: "All parameters are required"
                });
            }
            let data = await Service.SignUp(input);
            res.json(data);
        } catch (error) {
            console.log("list_grocery ::error", error)
            res.json({ status: false, error: error });

        }
    }
}