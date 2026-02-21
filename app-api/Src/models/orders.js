// models/Order.js
const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    productName: String, // snapshot
    price: Number,       // snapshot
    quantity: Number
}, { _id: false });

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    pincode: String
}, { _id: false });

const orderSchema = new mongoose.Schema(
    {
        orderNumber: {
            type: String,
            unique: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true
        },

        items: [orderItemSchema],

        totalAmount: {
            type: Number,
            required: true
        },

        orderStatus: {
            type: String,
            enum: ["PLACED", "SHIPPED", "DELIVERED", "CANCELLED"],
            default: "PLACED"
        },

        paymentStatus: {
            type: String,
            enum: ["PENDING", "SUCCESS", "FAILED"],
            default: "PENDING"
        },

        deliveryAddress: addressSchema,

        deliveredAt: Date
    },
    { timestamps: true }
);

orderSchema.index({ user: 1 });

module.exports = mongoose.model("orders", orderSchema);