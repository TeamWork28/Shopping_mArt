// models/User.js
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    city: String,
    pincode: String,
    mobileNumber: String
}, { _id: false });

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        mobileNumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        address: addressSchema,
        role:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "roles"
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model("users", userSchema);