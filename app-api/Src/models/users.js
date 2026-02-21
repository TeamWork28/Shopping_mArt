// models/User.js
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    pincode: String
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

userSchema.index({ email: 1 });

module.exports = mongoose.model("users", userSchema);