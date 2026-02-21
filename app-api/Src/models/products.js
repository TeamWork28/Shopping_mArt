const mongoose = require('mongoose');

let schema = {
    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    oldPrice: {
        type: Number,
        min: 0
    },

    brand: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String,
        required: true,
        trim: true
    }
}

const productSchema = new mongoose.Schema(
    schema,
    {
        timestamps: true
    }
);

productSchema.index({ name: 1 });
productSchema.index({ category: 1 });

module.exports = mongoose.model('products', productSchema);
