const products = require('../../models/products');
const roles = require('../../models/roles');
const users = require('../../models/users');
const { generateToken } = require('../../helper/Utils');

module.exports = {
    role: async function (input) {
        try {
            return await roles.find();
        } catch (error) {
            console.log("getProduct :: error", error)
        }
    },
    SignIn: async function (input) {
        try {
            let user = await users.findOne(
                {
                    email: input.email,
                    password: input.password
                },
                {
                    fullName: 1,
                    email: 1,
                    mobileNumber: 1
                }
            );


            if (user) {
                user = {
                    id: user._id.toString(),
                    fullName: user.fullName,
                    email: user.email,
                    mobileNumber: user.mobileNumber
                };
                let token = await generateToken(user)
                return { status: true, token: token }
            }
            return { status: false, message: "Invalid Credential" }

        } catch (error) {
            console.log("getProduct :: error", error)
        }
    },
    SignUp: async function (input) {
        try {

            let user = await users.findOne({
                "email": input.email
            })

            if (user) return { status: false, message: "Given Mail Id Already exist" };

            await users.create({
                "fullName": input.fullName,
                "email": input.email,
                "mobileNumber": input.mobileNumber,
                "password": input.password,
                "role": input.role
            });
            return { status: true, message: "User Created" };
        } catch (error) {
            console.log("getProduct :: error", error)
        }
    }
}