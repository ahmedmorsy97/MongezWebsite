import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    specs: {
        type: String,
        required: false
    },
    photoLinks: [{
        type: String,
        required: false
    }],
    priceRange: [{
        minquantity: {
            type: Number,
            required: true
        },
        maxquantity: {
            type: Number,
            required: true
        },
        priceofRange: {
            type: Number,
            required: true
        }
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
    },
    category: {
        type: String,
        required: true
    },
    Subcategory: {
        type: String,
        required: true
    }


});
productSchema.index({ "$**": "text" }); // Add this for the search to work

export const Product = mongoose.model('Product', productSchema);