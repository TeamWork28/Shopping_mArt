// models/Role.js
const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    permissions: [
      {
        type: String,
        enum: [
          "CREATE_PRODUCT",
          "UPDATE_PRODUCT",
          "DELETE_PRODUCT",
          "MANAGE_USERS",
          "VIEW_ORDERS"
        ]
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("roles", roleSchema);