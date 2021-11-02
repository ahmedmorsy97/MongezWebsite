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
    priceRange: [{
        type: String,
        required: false
    }],
    // percentageDiscount: { //Edit this
    //     type: Number,
    // },
    // priceDiscount: {
    //     type: Number,
    // },
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
    isremoved: {
        type: Boolean,
        default: false
    }


});
productSchema.index({ "$**": "text" }); // Add this for the search to work

export const Product = mongoose.model('Product', productSchema);