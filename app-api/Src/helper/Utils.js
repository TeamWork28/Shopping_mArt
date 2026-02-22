const jwt = require("jsonwebtoken");

module.exports = {
    generateToken: async function (payload) {
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1hr" // change to 1h, 24h, 30d etc
        });
        return token;
    },
    verifyToken: async function (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded;   // contains userId, email etc
        } catch (error) {
            return null;
        }
    }
}