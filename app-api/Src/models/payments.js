// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
      required: true
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    paymentGateway: {
      type: String,
      required: true
    },

    transactionId: {
      type: String
    },

    amount: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED"],
      default: "PENDING"
    },

    gatewayResponse: {
      type: Object
    }
  },
  { timestamps: true }
);

paymentSchema.index({ order: 1 });
paymentSchema.index({ user: 1 });

module.exports = mongoose.model("payments", paymentSchema);