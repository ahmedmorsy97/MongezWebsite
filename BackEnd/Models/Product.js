import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: false
    },
    photoLinks: [{
        type: String,
        required: false
    }],
    price: {
        type: Number,
        required: false
    },
    percentageDiscount: {
        type: Number,
    },
    priceDiscount: {
        type: Number,
    },
    rating: {
        type: Number,
        required: false
    },
    supplier: {
        type: mongoose.Types.ObjectId,
        ref: "Supplier"

    },
    quantity: {
        type: Number,

    },


});

export const product = mongoose.model('Product', productSchema);